import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div
      className="
      relative
      bg-teal-400 
      w-full
      h-12
      bg-gradient-to-r from-cyan-500 to-blue-500
    "
    >
      <div className="relative grid justify-items-center">
        <nav className="flex space-x-64 py-3
        text-white ...">
          <Link to="/homepage" className=" hover:text-lg hover:font-bold ">
            Home
          </Link>
          <Link to="/aplicaciones" className=" hover:text-lg hover:font-bold">
            Aplicaciones
          </Link>
          <Link to="/gestion" className="hover:text-lg hover:font-bold">
            Gestión
          </Link>
          <Link to="/dumps" className="hover:text-lg hover:font-bold">
            Dumps
          </Link>
        </nav>
          <button
            type="button"
            class="bg-yellow-600 border-cyan-900 hover:bg-green-700 hover:border-white
            absolute top-1 right-10 h-10 w-32 border-2 rounded-lg 
            text-white ..."
          >
            Cerrar sesión
          </button>
      </div>
    </div>
  );
};
