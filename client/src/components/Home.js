import React, 
{ 
 useEffect, 
 useState 
} from "react";

import { 
 useSelector, 
 useDispatch 
}   from "react-redux";

import {
} from '../Redux/actions/actions';

import Footer from './Footer.js'


export default function Home () { 

    const dispatch = useDispatch ();


  
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel1 carousel-item active">
              <div class="carousel-caption d-none d-md-block">
                <h2 class="titSlider">
                  Sistemas de riego para mantener vivos los campos
                </h2>
                <button type="button" name="button" class="btnWhite">
                  <p class="pBtnBlue">CONTACTANOS</p>
                </button>
                <article class="divFlex">
                  <img class="imgIcon" src="images/email.png" alt="" />
                  <img class="imgIcon" src="images/facebook.png" alt="" />
                  <img class="imgIcon" src="images/instagram.png" alt="" />
                  <img class="imgIcon" src="images/whatsapp.png" alt="" />
                </article>
              </div>
            </div>
            <div class="carousel2 carousel-item">
              <div class="carousel-caption d-none d-md-block">
                <h2 class="titSlider">
                  Sistemas de riego para mantener vivos los campos
                </h2>
                <button type="button" name="button" class="btnWhite">
                  <p class="pBtnBlue">CONTACTANOS</p>
                </button>
                <article class="divFlex">
                  <img class="imgIcon" src="images/email.png" alt="" />
                  <img class="imgIcon" src="images/facebook.png" alt="" />
                  <img class="imgIcon" src="images/instagram.png" alt="" />
                  <img class="imgIcon" src="images/whatsapp.png" alt="" />
                </article>
              </div>
            </div>
            <div class="carousel3 carousel-item">
              <div class="carousel-caption d-none d-md-block">
                <h2 class="titSlider">
                  Sistemas de riego para mantener vivos los campos
                </h2>
                <button type="button" name="button" class="btnWhite">
                  <p class="pBtnBlue">CONTACTANOS</p>
                </button>
                <article class="divFlex">
                  <img class="imgIcon" src="images/email.png" alt="" />
                  <img class="imgIcon" src="images/facebook.png" alt="" />
                  <img class="imgIcon" src="images/instagram.png" alt="" />
                  <img class="imgIcon" src="images/whatsapp.png" alt="" />
                </article>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <section id="nosotros">
          <h2 class="title2">NOSOTROS</h2>
          <hr class="linet" />
          <p class="parrSection">
            Punto AR nace para brindar una solución a los productores del Valle
            Inferior del Río Colorado frente a la emergencia hídrica que
            atraviesa la cuenca del Río Colorado y, por ende, la zona sur de la
            Provincia de Buenos Aires.
          </p>
        </section>
        <section id="servicios">
          <h2 class="title2">SERVICIOS</h2>
          <hr class="linet" />
          <p class="parrSection">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            dignissim vulputate tristique neque consectetur sit. Ut turpis elit
            at posuere eget tellus mi. Dui facilisis arcu elit lacus cras. Id
            dictum eu viverra condimentum adipiscing laoreet dolor volutpat.
          </p>
          <h3 class="title3">¿Quieres saber más?</h3>
        </section>
        <br />
        <article class="boxGreenLines">
          <div class="greenLine"></div>
          <div class="greenLine"></div>
        </article>
        <section>
          <img class="bumb" src="images/bombilla.png" alt="" />
          <h3 class="title3Blue">
            ¿Necesitas ayuda para encontrar qué producto es el correcto <br />
            para tu campo?
          </h3>
          <h3 class="title3">
            Te ayudaremos a encontrar la solución que necesitas.
          </h3>
          <button type="button" name="button" class="btn">
            <p class="pBtn">CONTACTANOS</p>
          </button>
        </section>
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

        <Footer />
      </div>
    );
};

