import React from 'react';
import Board from '../board/Board';
import Tips from '../tips/Tips';
import './game.css';

const Game = () => {
  return (
    <>
      <div className="section section-center flexcontainer ">
        <div className="section-center command_box">
          <Tips />
          <form></form>
        </div>
        <div className="section-center flex-col">
          <Board />
        </div>
      </div>
    </>
  );
};

export default Game;
