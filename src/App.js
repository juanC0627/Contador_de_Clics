import "./App.css";
import Boton from "./componentes/boton/boton";
import Logo from "./imagen/logo_ar.png";
import Contador from "./componentes/contador/contador";
import { useState } from "react";
function App() {
  //  se crea una varieble para el boton clic y el de reinicio
  const [count, setCount] = useState(0);

  const contadorClic = () => {
    setCount(count + 1);
  };
  const reiniciarContador = () => {
   setCount (0);
  };

  return (
    <div className="App">
      <div className="container_titulo">
        <h1>Contador de Clics</h1>
      </div>
      <div className="container_logo">
        <img src={Logo} alt="Imagen del Proyecto" title="Logo" />
      </div>
      <Contador valor={count}></Contador>

      <div className="container_botones">
        {/* agregamos el tipo a los botones */}
        <Boton texto="Clic" tipo={true} actividad={contadorClic}></Boton>
        <Boton
          texto="Reiniciar"
          tipo={false}
          actividad={reiniciarContador}
        ></Boton>
      </div>
    </div>
  );
}

export default App;
