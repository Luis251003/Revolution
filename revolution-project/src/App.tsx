import {Home,Login, Register,Catalogo,Detalle, Comparacion, Carrito, Envio} from "./pages/indice"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/detalle" element={<Detalle />} /> 
        <Route path="/comparacion" element={<Comparacion />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/envio" element={<Envio />} />
      </Routes>
    </Router>
  )
}

export default App
