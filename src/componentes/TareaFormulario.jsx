import React, { useState } from "react";
import '../stylesheets/TareaFormulario.css';
import { v4 as uuiv4 } from 'uuid';

function TareaFormulario(props) {

const [input, setInput] = useState(''); 

const manejarCambio = e => {
  setInput(e.target.value);
  console.log(e.target.value)
} 

const manejarEnvio = e => {
  e.preventDefault();
  console.log('enviando formulario')

  const tareaNueva = {
    id: uuiv4(),
    texto: input,
    completada: false
    }

    props.onSubmit(tareaNueva);
  }

  return (
    <form 
    onSubmit={manejarEnvio}
    className="tarea-formulario">
      <input 
        className="tarea-input"
        type='text'
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario