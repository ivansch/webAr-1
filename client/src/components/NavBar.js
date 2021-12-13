import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <a className="navbar-brand" href="#">
        <img className="imglogo" src="images/logo.jpg" alt="" />
      </a>

      <NavLink to="/home" className="nav-link">
        <p className="parrNav">HOMEs</p>
      </NavLink>

      <NavLink to="/servicios" className="nav-link">
        <p className="parrNav">SERVICIOS</p>
      </NavLink>

      <NavLink to="/productos" className="nav-link">
        <p className="parrNav">PRODUCTOS</p>
      </NavLink>

      <NavLink to="/proyectos" className="nav-link">
        <p className="parrNav">PROYECTOS</p>
      </NavLink>

      {/* <NavLink
          to ='/contacto'
          className = "parrNav" >
            CONTACTO
          </NavLink> */}
      <a className="nav-link" href="#contacto">
        <p className="parrNav">CONTACTO</p>
      </a>
    </div>
  );
}
