import React from 'react'
import Banner from '../../Componentes/Banner/Banner'

import Peliculas from '../Peliculas/Peliculas'
import './Inicio.css'


const Home = () => {
  return (
    <div className='Banner-banner'>
        <Banner/>
        <Peliculas/>
       
    </div>
  )
}

export default Home