// importo los hooks que voy a usar
import React, { useEffect, useState } from "react";

import {
  useSelector, // para reemplazar el mapStateToProps
  useDispatch, // para reemplazar el mapDispatchToProps
} from "react-redux";

// importo las acciones desde actions para pasarsela al dispatch del useEffect para que despache la accion
import { addProject } from "../Redux/actions/actions.js";
import Footer from "./Footer.js";

export default function AddProject() {
  const dispatch = useDispatch(); // instancio el useDispatch para poder usarlo como funcion y pasarle las acciones importadas de actions

  const [form, setForm] = useState({
    // creo un estado local para usar en el formulario del componennte con las props que defini en el post del back limpias('')
    title: "",
    image: "",
    parragraph: "",
    proyectType: "", // aca va a ser un select de una precarga (hacer)
  });

  const [errors, setErrors] = useState(""); // hacer

  function handlerOnChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handlerOnSubmit(e) {
    e.preventDefault();
    console.log("soy el form de añadirProyecto: ", form);
    dispatch(addProject(form));
    setForm({
      title: "",
      image: "",
      parragraph: "",
      proyectType: "",
    });
  }

  return (
    <div>
      <h2 className="titCardGreenS">Crear Proyecto</h2>
      <form className="formInit" onSubmit={handlerOnSubmit}>
        <label>Titulo</label>
        <input
          className="inputForm"
          type="text"
          name="title"
          placeholder="Titulo..."
          value={form.title}
          onChange={handlerOnChange}
        />

        <label>Imagen</label>
        <input
          className="inputForm"
          type="text"
          name="image"
          placeholder="Imagen"
          value={form.image}
          onChange={handlerOnChange}
        />

        <label>Parrafo</label>
        <input
          className="inputForm"
          type="text"
          name="parragraph"
          placeholder="Parrafo..."
          value={form.parragraph}
          onChange={handlerOnChange}
        />

        <label>Tipo de proyecto</label>
        <input
          className="inputForm"
          type="text"
          name="proyectType"
          placeholder="Tipo de proyecto..."
          value={form.proyectType}
          onChange={handlerOnChange}
        />

        {/* <label className= "parrBtn">Añadir PDF</label>
        <input type="file" /> */}

        <button type="submit" className="btnS">
          Añadir
        </button>
      </form>
      <Footer />
    </div>
  );
}
