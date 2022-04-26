import React from "react";

export const InicioSesion = () => {
  return (
    <form className="bg-white shadow-md rounded-lg py-10 px-5 fondo h-screen flex justify-center">
      <div>
        <label
          htmlFor="nombre"
          className="block text-white uppercase font-bold flex justify-center"
        >
          Nombre:
        </label>
        

        <label
          htmlFor="contraseña"
          className="block text-white uppercase font-bold flex justify-center"
        >
          Contraseña:
        </label>
       
        <br></br>
        <br></br>
        
        <br></br>
        <a
          className="text-decoration-line: underline text-white font-bold"
          href="Homepage.jsx"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </form>
  );
};
