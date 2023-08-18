//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from "react";

function Card({nombre, equipo}) {
    return (
      <div>
        <h2>Hola! {nombre}</h2>
        <p>Tu equipo favorito es {equipo}</p>
      </div>
    );
  }
  
  export default Card;