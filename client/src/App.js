import './App.css';
import React from "react";

import { Route } from "react-router";

import LandingPage from './components/LandingPage.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Proyectos from './components/Proyectos.js';
import añadirProyecto from './components/añadirProyecto.js'
import Servicios from './components/Servicios.js'
import Productos from './components/Productos.js'
import ShowProjects from './components/ShowProjects.js'


export default function App () {

  return (

    <div>

      <Route 
        path = '/'
        component = {NavBar} /> 

      <Route
        exact path = '/'  
        component = {Home} /> 
        
      <Route 
        exact path = '/home'    
        component = {Home} />

      <Route 
        exact path = '/servicios'    
        component = {Servicios} />

      <Route 
        exact path = '/productos'    
        component = {Productos} />

      <Route 
        exact path = '/proyectos'    
        component = {ShowProjects} />

      <Route 
        exact path = '/landingpage'    
        component = {LandingPage} />

        <Route 
        exact path = '/admin'
        component = {Proyectos} />

        <Route 
        path='/crearproyecto'
        component={añadirProyecto} />

    </div>

  );

};
