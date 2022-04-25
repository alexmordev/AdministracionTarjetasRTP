import './App.css';
import { Header } from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Homepage } from './pages/Homepage/Homepage';
import { Login } from './pages/Login/Login';


function App() {
  return (

    <div>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
