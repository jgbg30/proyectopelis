import { useContext} from 'react'
import Cardpeliculas from '../../Componentes/Cardpeliculas/Cardpeliculas'
import Footer from '../../Componentes/Footer'
import { Context } from '../../Store/AppContext'
import './Peliculas.css'



const Peliculas = () => {
const {peliculas} = useContext(Context)

  return (
    <div className='container'>
      <h1 className='text-center mt-4 mb-4'>Películas </h1>
      <div className='d-flex flex-wrap justify-content-around'>
        {
          peliculas.length > 0 ?
            peliculas.map(pelicula => (
              <Cardpeliculas key={pelicula.id} {...pelicula} favs={pelicula} />
            ))
            :
            <p>Cargando...</p>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Peliculas