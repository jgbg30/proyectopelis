import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componentes/Navbar';
import Peliculas from './Paginas/Peliculas';
import Home from './Paginas/Home';
import Cardpeliculas from './Componentes/Cardpeliculas/Cardpeliculas';
import Favoritos from './Paginas/Favoritos/Favoritos';
import Detallespeli from './Paginas/Detallespeli/Detallespeli';
import Detallespelifav from './Paginas/Detallespeli/Detallepelifav';



function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Peliculas" element={<Peliculas />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Cardpeliculas" element={<Cardpeliculas />} />
        <Route path="/Detallespeli/:id" element={<Detallespeli />} />
        <Route path="/Detallespelifav/:id" element={<Detallespelifav/>} />
 
      </Routes>
    
      
    </Router>
      
     
  );
}

export default App;
