import { useState } from "react";
import Card from "./Card";
import './App.css'


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const[nombre, setNombre]=useState("")
  const[equipo, setEquipo]=useState("")
  const[submitted, setSumiteed]=useState(false)
  const[error, setError]=useState(false)

  function capturarNombre(e){
    setNombre(
      e.target.value
    )
  }

  function capturarEquipo(e){
    setEquipo(
      e.target.value
    )
  }
 

  const handleSubmit = (e) =>{
    e.preventDefault();

    if( nombre.length >= 3 && equipo.length > 6){
      setSumiteed(true)
      setError(false)
    }else{
      setError(true)
      setSumiteed(false)
      
    }}

    if(submitted == true){
      return <Card nombre={nombre} equipo={equipo} /> 
    }


  return (
    <div className="App">
      <h1>Elige un equipo de futbol</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" onChange={capturarNombre}/>
      <input type="text" placeholder="Equipo favorito" onChange={capturarEquipo}/>
      <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">Por favor chequea que la información sea correcta</p>}
    </div>
    
  );

}

export default App;