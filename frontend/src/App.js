import Navbar from "./Navbar"
import Produtos from "./pages/Produtos"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Cchamado from "./pages/Cchamado"
import Tchamado from "./pages/Tchamado"
import Claudos from "./pages/Claudos"
import Tlaudos from "./pages/Tlaudos"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cchamado" element={<Cchamado />} />
          <Route path="/tchamado" element={<Tchamado />} />
          <Route path="/claudos" element={<Claudos />} />
          <Route path="/tlaudos" element={<Tlaudos />} />
        </Routes>
      </div>

      <Routes>
         
      </Routes>
      
    </>
  )
          




}

export default App
