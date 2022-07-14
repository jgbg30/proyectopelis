import axios from 'axios'
import { useEffect, useState, createContext } from 'react'


export const Context = createContext(null)
const UserProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])
    const [peliculas, setPeliculas] = useState([])
    const [counter, setCounter] = useState(0)

    
    const obtenerPeliculas = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3b208586ddfb7172c566215d5345c170')
        setPeliculas(response.data.results)
    }

const agregarFavoritos = (favs) => {
    
    const agregarFavs = favourites.find(peliElegida => peliElegida.id === favs.id)

        if (agregarFavs) {
            setFavourites([...favourites])
        } else {
            setCounter(counter + 1)
            setFavourites([...favourites, { ...favs }])
            
        }
    }
const borrarFavoritos = (id) => { 
    setCounter (counter - 1)
    setFavourites(favourites.filter(borrarFavs => borrarFavs.id !== id))
}



    useEffect(() => {
        obtenerPeliculas()
    }, [])


    return (
        <Context.Provider value={{ peliculas, setPeliculas, favourites, agregarFavoritos, borrarFavoritos, counter }}>
            {children}
        </Context.Provider>
    )

}

export default UserProvider