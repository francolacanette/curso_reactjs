import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
      <a className= "WIP" href="/">WIP</a>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        <li>
          <a href="/nosotros">Nosotros</a>
        </li>
        <li>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
