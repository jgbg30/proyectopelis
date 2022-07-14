import { useContext, useEffect, useState } from 'react'
import Footer from '../../Componentes/Footer'
import { Context } from '../../Store/AppContext'
import  CardFavs  from '../../Componentes/CardFav/CardFavs'


const Favoritos = () => {
  
  const {favourites} = useContext(Context)
  

  return (
    <div className='container'>
      <h1 className='text-center mt-4 mb-5 '>Películas Favoritas</h1>
      <div className='d-flex flex-wrap justify-content-around'>
        {
          favourites.length > 0 ?
          favourites.map(pelicula => (
              <CardFavs key={pelicula.id} {...pelicula} />
            ))
          :
              <p>Lista de favoritos vacía</p>
        }
      </div>
      <Footer/>
    </div>
  )
    }

export default Favoritos