import React from 'react'

export  const InicioSesion =() =>{
  return (
        
          <form className='bg-white shadow-md rounded-lg py-10 px-5 fondo h-screen flex justify-center'>
            <div>
              <label htmlFor='nombre' className='block text-white uppercase font-bold flex justify-center'>
                Nombre:
                </label>
              <input 
              id='nombre'
              type="text" 
              placeholder='Nombre del usuario'
              className='border-2 w-50 p-2 mt-2  rounded-md font-bold' 
              />

              <label htmlFor="contraseña" className='block text-white uppercase font-bold flex justify-center'>
                  Contraseña:
              </label>
              <input
              id='contraseña'
              type="text"
              placeholder='Contraseña'
              className='border-2 w-50 p-2 mt-2 placeholder-gray-400 rounded-md font-bold'>
              </input>
              <br></br>
              <br></br>
              <input type="submit"
              className='bg-green-600 w-30 p-3
               text-white uppercase font-bold
               hover:bg-green-700 cursor-pointer rounded-lg flex justify-center'
              value="Registro" />            
              <br></br>
              <a  className='text-decoration-line: underline text-white font-bold'   href="Homepage.jsx">¿Olvidaste tu contraseña?</a>
            </div>
          </form>
          // <div className='line-through'>Log in</div>
        
    
  )
}
