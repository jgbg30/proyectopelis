import React from 'react'
import { Link } from 'react-router-dom'
import Contadorfavoritos from '../contadorfavorito'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-5 pb-4  text-dark">
      <div className="container">
        
        <Link className="navbar-brand" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="86" height="40" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
        <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
        </svg></Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="menu navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-dark" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/Peliculas">Películas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/Favoritos">Favoritos</Link>
            </li>
          
          </ul>
        </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark" type="submit">Search</button>
        </form> */}
       
        <Link className="corazon navbar-brand" to="/Favoritos"><svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className=" bi bi-chat-heart-fill" viewBox="0 0 16 16">
          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
        </svg></Link>
        
        <Contadorfavoritos/>
      </div>
    </nav>
  )
}

export default Navbar