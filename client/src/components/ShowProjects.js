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
    <section id="proyectos">
      <h2 class="title2">PROYECTOS</h2>
      <hr class="linet" />
      <article class="card">
        <img class="imgCard" src="images/maiz.jpg" alt="" />
        <div class="boxCard">
          <h4 class="titCardBlue">PRODUCTIVOS INTEGRALES</h4>
          <p class="parrCard">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
            mauris conubia odio sed montes mollis vehicula, ac curabitur
            purus per porta libero neque. At aptent venenatis risus quam
            pharetra varius vestibulum praesent hac convallis, montes platea
            sem senectus inceptos dapibus parturient pretium duis laoreet
            condimentum
          </p>
          <button type="button" name="button" class="btnCard">
            <p class="pBtnCard">VER MÁS</p>
          </button>
        </div>
      </article>
      <article class="card">
        <div class="boxCard">
          <h4 class="titCardGreen">RIEGO POR GOTEO</h4>
          <p class="parrCard">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nullam,
            mauris conubia odio sed montes mollis vehicula, ac curabitur
            purus per porta libero neque. At aptent venenatis risus quam
            pharetra varius vestibulum praesent hac convallis, montes platea
            sem senectus inceptos dapibus parturient pretium duis laoreet
            condimentum
          </p>
          <button type="button" name="button" class="btnCard">
            <p class="pBtnCard">VER MÁS</p>
          </button>
        </div>
        <img class="imgCard" src="images/maiz.jpg" alt="" />
      </article>
    </section>
      <div className='wrapper'>
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
    <div>
        <Footer/>
    </div>
</div>


  );
}
