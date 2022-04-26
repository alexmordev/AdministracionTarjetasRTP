import React from 'react'
import "../../index.css"
import {Boton} from '../../Components/InicioSesion/Boton/Boton'
import {Input_contra} from '../../Components/InicioSesion/Input_Contra/Input_contra'
import {Input_usuario} from '../../Components/InicioSesion/Input_usuario/Input_usuario'



export const Login = () => {
  return (
    <div className='fondo h-screen'>
        <form action="">    
            <Input_usuario/>
            <Input_contra/>
            <Boton/>
        </form>
    </div>
  )
}
