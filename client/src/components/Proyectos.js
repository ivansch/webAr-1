// importo los hooks que voy a usar
import React, { useEffect, useState } from "react";

import {
  useSelector, // para reemplazar el mapStateToProps
  useDispatch, // para reemplazar el mapDispatchToProps
} from "react-redux";

import { projectByTitle, getAllProjects } from "../Redux/actions/actions.js";

import { Link } from "react-router-dom";
import Card from "./Card.js";
import Footer from "./Footer.js"

export default function Proyectos() {
  const dispatch = useDispatch(); // instancio el useDispatch para poder usarlo como funcion y pasarle las acciones importadas de actions


  const allProjects = useSelector((state) => state.allProjects);

  console.log("soy el allProjects: ", allProjects);

  const [input, setInput] = useState("");

  const handlerOnChange = (e) => {
      setInput(e.target.value);
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    console.log("soy el input del handlerOnSubmit: ", input);
    dispatch(projectByTitle(input));
};

useEffect(() => {
  dispatch(getAllProjects());
}, [dispatch]);

  return (
    <div>
      <div>
        <label>Añadir proyecto</label>
        <button>
          <Link to='/crearproyecto'>+</Link>
        </button>
      </div>

      <form onSubmit={handlerOnSubmit}>
        <label> BUSCAR PROYECTO </label>
        <input className="inputSearch"
          type="text"
          placeholder="Proyecto..."
          value={input}
          onChange={handlerOnChange}
        />

        <button type="submit">BUSCAR</button>

        <div>
    {
        ( allProjects.length === 0) ?
          (<div>Cargando...</div>)
         :  (<div>

            {
            allProjects.map((project) => {
                console.log('entre al mapeo')
                console.log('soy el allProject.id despues del mapeo: ', allProjects)
                return (
                    <div key={project.id}>

                        <Card
                        title={project.title}
                        image={project.image}
                        parragraph={project.parragraph}
                        proyectType={project.proyectType} />
                    </div>
                )
            })}
        </div>)
    }
</div>

      </form>
      
      <Footer/>
    </div>
  );
}
