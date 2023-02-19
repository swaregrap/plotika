import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container-nav">
          <div className="brand">Plotika</div>
        </div>
        <div className="nav-links">
          <a href="/">Diseños</a>
          <a href="/">Nosotros</a>
          <a href="https://www.instagram.com/botikarecords/">Redes</a>
          <a href="/">Contacto</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
