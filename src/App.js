import "./App.css";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="frecodecamp log"
        />
      </div>
      <div className="tareas-lista-pricipal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
