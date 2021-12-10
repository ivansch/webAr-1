import {
    GET_PROJECT_BY_TITLE,
    GET_ALL_PROJECTS,
    ADD_PROJECT
}  from '../actions/actionTypes.js';

const inicialState = {
    
    projectByTitle: [],
    allProjects: [],
    newProject: []
}

export default function reducer (state = inicialState, { type, payload }) {  
    switch (type) { 

        case GET_PROJECT_BY_TITLE:
            return {
                ...state,
                projectByTitle: payload,
                allProjects: payload
            };
        
        case GET_ALL_PROJECTS:
            return {
                ...state,
                allProjects: payload
            };
        
        case ADD_PROJECT:
            return {
                ...state,
                newProject: payload
            };
        

        default: {

            return state;

        };

    };

};
