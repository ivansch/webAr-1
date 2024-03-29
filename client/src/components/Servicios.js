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

useEffect(() => {
  dispatch(getAllProjects());
}, [dispatch]);

  return (
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
    <div>
    <div id="productos">
    <div className="cardServicio">
        <img className="imgCardServicio" src="images/maiz.jpg" alt="" />
        <h4 className="titCardProductos">PRODUCTO 1</h4>
        <p className="parrCard">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
          mauris conubia odio ient pretium duis laoreet condimentum
        </p>
        <button type="button" name="button" className="btnCardProductos">
          <p className="pBtnCardProduct">VER MÁS</p>
        </button>
    </div>
    <div className="cardServicio">
        <img className="imgCardServicio" src="images/maiz.jpg" alt="" />
        <h4 className="titCardProductos">PRODUCTO 1</h4>
        <p className="parrCard">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
          mauris conubia odio ient pretium duis laoreet condimentum
        </p>
        <button type="button" name="button" className="btnCardProductos">
          <p className="pBtnCardProduct">VER MÁS</p>
        </button>
    </div>
    <div className="cardServicio">
        <img className="imgCardServicio" src="images/maiz.jpg" alt="" />
        <h4 className="titCardProductos">PRODUCTO 2</h4>
        <p className="parrCard">
        Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
        mauris conubia odio ient pretium duis laoreet condimentum
        </p>
        <button type="button" name="button" className="btnCardProductos">
          <p className="pBtnCardProduct">VER MÁS</p>
        </button>
    </div>
    </div>
        <Footer/>
    </div>
</div>


  );
}
