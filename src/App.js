import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contato from "./components/Contato.js";
import Buscar from "./components/Buscar.js";
import NovoProjeto from "./components/NovoProjeto.js";
import Admin from "./components/Admin.js"

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
        <Route path="/Buscar" element={<Buscar />}></Route>
        <Route path="/NovoProduto" element={<NovoProjeto />}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        {/* <Route path="/project/:id" element={<Project />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
