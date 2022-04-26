import React from 'react'

export const Input_usuario = () => {
  return (
    <form className='bg-white shadow-md rounded-lg py-10 px-5 fondo h-screen flex justify-center'>    <input
          id="nombre"
          type="text"
          placeholder="Nombre del usuario"
          className="border-2 w-50 p-2 mt-2  rounded-md font-bold"
        />
        </form>
  )
}
