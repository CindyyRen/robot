import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { commandLists } from '../../utils/constants';
import './description.css';

export const Description = () => {
  return (
    <div className="section header">
      <div className="section-center">
        {/* List the control commands */}
        <div>
          <h4>Control the robot using below commands:</h4>
          <ul>
            {commandLists.map((command) => {
              return (
                <li key={command.id}>
                  <p>
                    <span>
                      {' '}
                      <MdKeyboardDoubleArrowRight />{' '}
                    </span>
                    <strong>
                      {command.name}({command.params ? `${command.params}` : ``}
                      )
                    </strong>
                    <span> -- {command.desp}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
