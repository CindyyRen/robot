import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import bellroy from '../../assets/bellroy-white.png'

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="link-style">
        <img src={bellroy} alt="robot" width="60px" height="29px" />
      </Link>
      <ul>
        <li></li>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/robot">robot</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
