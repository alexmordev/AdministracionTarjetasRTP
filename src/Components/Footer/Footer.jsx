import React from 'react'
import logo from "../../assets/movilidad_logo2.jpeg";

export const Footer = () => {
  return (
    <div className='
      w-full
      h-16
      bg-gradient-to-r from-cyan-500 to-blue-500
    '>
      <img
        src={logo}
        alt="Logo movilidad cdmx"
        className="h-16 w-1/6 absolute"
      />
      <p className='text-center text-white text-lg  py-3'>
        El uso indebido de este software puede representar un delito
        y es responsabilidad completa del usuario que lo lleve a cabo. <br /> 
        En caso de tener dudas sobre sus funciones favor de contactar
        al equipo de desarrollo de RTP
      </p>
    </div>
  )
}
