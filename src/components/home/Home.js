import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import arrowpng from '../../assets/arrow.svg';
import wali from '../../assets/64456.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-content">
      <h1 className="text-center robot">Welcome to Toy Robot Game</h1>
      <Link to="/robot">
        <img src={wali} alt="logo" height="250px" />
      </Link>
      <div className="description">
        <p>Control toy robot on a grid with a set of commands.</p>
        <button
          onClick={() => {
            navigate('/robot');
          }}
          className="play_button"
        >
          Let's play
          <img src={arrowpng} alt="play icon" />
        </button>
      </div>
    </div>
  );
};

export default Home;
