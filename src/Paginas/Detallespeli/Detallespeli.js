import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Cardetalle from '../Detallespeli/Cardetalle.js'
import { Context } from '../../Store/AppContext';
import Footer from '../../Componentes/Footer'


const Detallespeli = () => {
  const {id} = useParams()
const {peliculas}=useContext(Context)
    const Detalle =(peliculas.filter(bueno => bueno.id == id))


return (
  <div className='container'>
    <div className='d-flex flex-wrap justify-content-around'>
      {
        Detalle.length > 0 ?
          Detalle.map(pelicula => (
            <Cardetalle key={pelicula.id} {...pelicula} favs={pelicula} />
          ))
          :
          <p>Cargando...</p>
      }
    </div>
   
  </div>
)
}
export default Detallespeli