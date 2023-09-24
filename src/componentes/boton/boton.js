import React from "react";
// 1 usare componentes basados en funciones.
// 2 luego de daremos las propiedades
function Boton(props) {
  return (
    // definimos propiedades al boton para saber si es el contador o el de reinicio
    <button className={props.tipo ? "boton_clic" : "boton_reiniciar"} onClick={props.actividad}>
      {props.texto}
    </button>
  );
}
export default Boton;
