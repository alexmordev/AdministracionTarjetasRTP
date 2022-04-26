import "./App.css";
import { Header } from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Homepage } from "./pages/Homepage/Homepage";
import { Login } from "./pages/Login/Login";
import {Aplicaciones} from './pages/Aplicaciones/Aplicaciones'
import {Gestion} from './pages/Gestion/Gestion'
import {Dumps} from './pages/Dumps/Dumps'
import {InicioSesion} from './Components/InicioSesion/InicioSesion'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/aplicaciones" element={<Aplicaciones />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/dumps" element={<Dumps />} />
        <Route path="/iniciosesion" element={<InicioSesion/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
