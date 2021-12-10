import React, { useEffect, useState } from "react";
import {
  useSelector, // para reemplazar el mapStateToProps
  useDispatch, // para reemplazar el mapDispatchToProps
} from "react-redux";
export default function LandingPage () {

    const dispatch = useDispatch(); // instancio el useDispatch para poder usarlo como funcion y pasarle las acciones importadas de actions
    const [input, setInput] = useState("");

      const handlerOnChange = (e) => {
          setInput(e.target.value);
      };
    
    return (
      <div>
        <form className="formInit">
          <h2 className="titCardBlue">Inicia sesión</h2>
          <input
            className="inputForm"
            type="text"
            placeholder="Usuario"
            onChange={handlerOnChange}
          />
          <input
            className="inputForm"
            type="password"
            placeholder="Contraseña"
            onChange={handlerOnChange}
          />
          <button className="btnS" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    );
}