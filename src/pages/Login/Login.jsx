import React from 'react'
import "../../index.css"
import { InicioSesion } from '../../Components/InicioSesion/InicioSesion'
import { Input_usuario } from '../../Components/InicioSesion/Input_usuario/Input_usuario'
import { Boton } from '../../Components/InicioSesion/Boton/Boton'
import { Input_contra } from '../../Components/InicioSesion/Input_Contra/Input_contra'


export const Login = () => {
  return (
    <div className='fondo h-screen'> 
        <InicioSesion/>
    </div>
  )
}
