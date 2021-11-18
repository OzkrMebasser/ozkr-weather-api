
import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="navv">
      <div className="flexButtons">
        <Link className="a" style={{textDecoration: 'none'}} to='/'>Inicio</Link>
        <Link className="a" style={{textDecoration: 'none'}} to='/cards'>Ciudades</Link>
      </div>
      <div className="flexButtons">
        <Link id="titulo" style={{textDecoration: 'none'}} to="/">Weather APP</Link>
      </div>
  </div>
  );
};

export default Nav;
