import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { facing } from '../../utils/constants';
import './tips.css'

const Tips = () => {
  return (
    <div className="tips">
      <h4>Tips: </h4>
      <ul>
        <li>
          <MdKeyboardDoubleArrowRight /> Commands is{' '}
          <strong>CASE INSENSITIVE</strong>;{' '}
        </li>
        <li>
          <MdKeyboardDoubleArrowRight /> Invalid commands will be discarded;{' '}
        </li>
        <li>
          <MdKeyboardDoubleArrowRight /> Facing value :
          <strong>{facing.map((face, index) => `"${face}",`)}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Tips;
