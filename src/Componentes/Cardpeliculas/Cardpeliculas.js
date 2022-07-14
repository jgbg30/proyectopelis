import React, { useContext, useState } from 'react'
import { Context } from '../../Store/AppContext';
import { imgPeli } from '../../Utils';
import './Cardpeliculas.css'
import { Link } from 'react-router-dom';


const Cardpeliculas = (props) => {
  const {backdrop_path, title, vote_average, favs, id} = props;
  const {agregarFavoritos} = useContext(Context)
  
  return (
    <div className="card mb-3 p-3 mb-5 bg-white rounded" style={{width: "18rem"}}> 
      <Link className='card-uno' to={`/Detallespeli/${id}`}>
        <img src={`${imgPeli}${backdrop_path}`} className="card-uno card-img-top" alt={title} />
          <div className="card-uno card-body">
            <h5 className="card-uno card-title">{title}</h5>
            <p className="card-uno card-text mb-1">{vote_average} </p>
          </div>
      </Link>
            <button   onClick={() => agregarFavoritos(favs)} className="card-uno cardcorazon navbar-brand"> <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" bi bi-chat-heart-fill" viewBox="0 0 16 16">
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
          </svg></button>
         {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  )
}



export default Cardpeliculas