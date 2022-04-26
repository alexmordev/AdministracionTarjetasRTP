import React from 'react'
import logo from "../../assets/movilidad_logo2.jpeg"
import "../../index.css"

export const Homepage = () => {
  return (
    <div className="fondo h-screen">
        <p>Home Page</p>
        <div>
    <img src={logo} alt="Logo movilidad cdmx" 
        className=""
      />
        </div>
    </div>
  )
}


/* bg-scroll bg-cover bg-no-repeat */