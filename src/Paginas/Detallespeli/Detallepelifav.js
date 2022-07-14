import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Cardetallefavorito from './Cardetallefavorito'
import { Context } from '../../Store/AppContext';
import Footer from '../../Componentes/Footer'


const Detallepelifav = () => {

  const {id} = useParams()
const {peliculas}=useContext(Context)
    const Detalles =(peliculas.filter(bueno => bueno.id == id))


return (
  <div className='container'>
    <div className='d-flex flex-wrap justify-content-around'>
      {
        Detalles.length > 0 ?
          Detalles.map(pelicula => (
            <Cardetallefavorito key={pelicula.id} {...pelicula} favs={pelicula} />
          ))
          :
          <p>Cargando...</p>
      }
    </div>
   
  </div>
)
}

export default Detallepelifav