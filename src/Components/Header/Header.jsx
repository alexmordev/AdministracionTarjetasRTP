import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/movilidad_logo.jpeg"

export const Header = () => {
  return (
    <div
      className="
      bg-teal-400 
      w-full
      h-24
      bg-gradient-to-r from-cyan-500 to-blue-500
    "
    >
      <img src={logo} alt="Logo movilidad CDMX" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/aplicaciones">Aplicaciones</Link>
        <Link to="/gestion">Gestión</Link>
        <Link to="/dumps">Dumps</Link>
        <button
          type="button"
          class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
        >
          Cerrar sesión
        </button>
      </nav>
    </div>
  );
};
