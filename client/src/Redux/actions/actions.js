import axios from 'axios'

import {
    GET_PROJECT_BY_TITLE,
    GET_ALL_PROJECTS,
    ADD_PROJECT
}  from './actionTypes';

import { 
  LOCALHOST 
} from '../../constants'

export function projectByTitle(payload) {
  console.log('soy el payload de projectByTitle: ', payload)
  return async function(dispatch) {
     await axios.get(`${LOCALHOST}?title=${payload}`)
     .then((response) => {
       console.log('soy el response de projectByTitle: ', response)
       dispatch({
         type: GET_PROJECT_BY_TITLE,
         payload: response.data
       })
     })
     .catch ((error) => console.log (error));
  }
}

export function getAllProjects(){
  return async function(dispatch) {
    await axios.get(`${LOCALHOST}`)
    .then((response) => {
      console.log('soy el response de getAllProjects: ', response)
      dispatch({
        type: GET_ALL_PROJECTS,
        payload: response.data
      })
    })
  }
}

export function addProject(payload) {
  console.log('soy el payload de addProject: ', payload)
  return async function(dispatch) {
    await axios.post(`${LOCALHOST}`, payload)
    .then((response) => {
      console.log('soy el response de addProject: ', response)
      dispatch({
        type: ADD_PROJECT,
        payload: response.data
      })
    })
  }
}

