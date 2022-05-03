import React from 'react'

export  const InicioSesion =() =>{
  return (
        
          <form className='bg-white shadow-md rounded-lg p-32 fondo h-screen flex justify-center'>
            <div>
              
              <input 
              id='nombre'
              type="text" 
              placeholder='Nombre del usuario'
              className='border-2 w-96 h-20  p-2 mt-2  rounded-md font-bold' 
              />

              <br /><br /> <br />

              <input
              id='contraseña'
              type="text"
              placeholder='Contraseña'
              className='border-2 w-96 h-20  p-2 mt-2 placeholder-gray-400 rounded-md font-bold'>
              </input>
              <br></br>
              <br></br> <br />
              <br />

              <input type="submit"
              className='bg-green-600 w-40 p-3 
               text-white uppercase font-bold
               hover:bg-green-700 cursor-pointer rounded-lg flex justify-center'
              value="Registro" />            
              <br></br><br />
              <a  className='text-decoration-line: underline text-white font-bold
              hover:text-blue-600 hover:font-extrabold hover:text-lg'   href="Homepage.jsx">¿Olvidaste tu contraseña?</a>
            </div>
          </form>
          // <div className='line-through'>Log in</div>
        
    
  )
}
