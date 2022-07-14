import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../Store/AppContext';
import { imgPeli } from '../../Utils';
import './Detallespeli.css'
import Footer from '../../Componentes/Footer'

const Cardetallefavorito = (props) => {
  const {backdrop_path, title, vote_average, favs, overview} = props;
  const {agregarFavoritos} = useContext(Context)
  return (
    <div className="Container text-center">
          <h1 className='mt-4 mb-4'>{title}</h1>
        
        <div className="movieDetails ">
        <img className="movieImage" src={`${imgPeli}${backdrop_path}`} alt={title} />
            <h5>Título:  {title}</h5>
            <h5>Puntuación: {vote_average}</h5>
            <h5>Sinopsisz: </h5>
            <p className="firstItem"> {overview} </p>
            <button   onClick={() => agregarFavoritos(favs)} className="card-uno cardcorazon"><svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" bi bi-chat-heart-fill" viewBox="0 0 16 16">
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
          </svg></button><Link className='btn boton  shadow ' to='/Favoritos'>Volver</Link>
         {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
         </div>
         <Footer/>
    </div>
  )
}
export default Cardetallefavorito