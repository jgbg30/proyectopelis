import React, { useContext, useState } from 'react'
import { Context } from '../../Store/AppContext';
import { imgPeli } from '../../Utils';
import { Link } from 'react-router-dom';
import './CardFav.css'

const CardFavs = (props) => {
  const {backdrop_path, title, vote_average, id} = props;
  
  const {borrarFavoritos} = useContext(Context)
  
  return (
    <div className="card mb-3" style={{width: "18rem"}}>
      <Link className='card-uno' to={`/Detallespelifav/${id}`}>
        <img src={`${imgPeli}${backdrop_path}`} className="card-img-top" alt={title} />
        <div className="card-body shadow p-3 mb-5 bg-white rounded">
            <h5 className="card-title">{title}</h5>
            <p className="card-text mb-1">{vote_average} </p>
            </div></Link>
            <button   onClick={() => borrarFavoritos(id)} className="corazonfav navbar-brand">Eliminar </button>
         {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        
       
    </div>
  )

  

}


export default CardFavs