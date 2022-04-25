import logo from '../../logo.svg';
import './App.css';
import Formulario from './Formulario';

function App() {
  return (
    <div className="App mt-12">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Formulario/>
    </div>
  );
}

export default App;
