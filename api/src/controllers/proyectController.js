const {
  Proyect,
  ProyectType, // modifiqué
} = require("../db");
const { Op } = require('sequelize');


const addProyect = async (req, res) => {
  const { title, image, parragraph, proyectType } = req.body;

  try {
    const createdProyect = await Proyect.create({
      image: image,
      title: title,
      parragraph: parragraph,
      proyectType: proyectType, // modifiqué
    });

    // if (createdProyect) {
    //   res.json(createdProyect);
    // } else {
    //   res.json("Proyect could not be created");
    // }
    createdProyect ? res.send(createdProyect) : res.send ('Project could not be created')
  } catch (error) {
    console.log(error);
  }
};

const allProyects = async (req, res) => {
  const { title } = req.query;

  try {
    let dbProjects = await Proyect.findAll();

    console.log('soy el dbProyects: ', dbProjects)

    if (title) {
    const projectByTitle = await Proyect.findAll({where: { title: {[Op.iLike] : `%${title}%`}}})

    console.log('soy el projectByTitle: ', projectByTitle)
    
    res.send(projectByTitle)
    } else {
      res.send(dbProjects);
    }
  } 
  catch (error) {
    console.log(error);
  }
};

const deleteProyect = async (req, res) => {
  // le paso toda la data por body (el id tiene que ser el mismo que te da cuando lo creaste)
  const { id } = req.query;

  try{
    const deleteProjectById = await Proyect.findByPk(id);

    // console.log('soy el delteProyectById: ', deleteProyectById);

    deleteProjectById ? res.json(await deleteProjectById.destroy()) : res.send('The project could not be delted')


    // deleteProyectById ? res.status(200).send('Project deleted!') : res.send('The project could not be deleted')

  }
  catch (error) {
    console.log(error)
  }


};

const updateProyect = async (req, res) => {
  // le paso toda la data por body (el id tiene que ser el mismo que te da cuando lo creaste)
  const { title, image, parragraph, id, proyectType } = req.body;
  
  try {
    const projectById = await Proyect.findByPk(id);

    
    if (projectById) {
      // si te pasan id por body, los busco en db
      
      
      // console.log('soy el projectById: ', proyectById);
      
      // valido que me hayan pasado algun atributo a modificar
      // if (title || image || parragraph || proyectType) {
        // valido que haya encontrado el project con vese id
        
        projectById ? res.send(await projectById.update({title, image, parragraph,  proyectType})) : res.send('The project could not be updated'); 

        // console.log('soy el title de postman: ', title);
        // if (proyectById) {
          // proyectById.title = title;
          // proyectById.image = image;
          // proyectById.parragraph = parragraph;
          // proyectById.proyectType = proyectType;
        // } else {
        //   // si no lo encontro le mando mensaje
        //   res.send(`Error finding the project with the id ${id}`);
        // }
      // } else {
        // // si no me mandan atributos mando mensaje
        // res.send("you need to send attributes to modify the project");
      // }

      // proyectById ? res.send(proyectById) : res.send('Proyect could not be updated');

    } else {
      // si no me mandan id por body, le devuelvo todos

      const allProjects = await Proyect.findAll();

      allProjects
        ? res.send(allProjects)
        : res.send("Error finding the projects");
    }
  } catch (error) {
    // si se rompe algo
    console.log(error);
  }
};



module.exports = {
  addProyect,
  allProyects,
  deleteProyect,
  updateProyect
};

// FIX Proyect (modifico) -------> addProyects (modifico) -----> allProyects
// FINISHED
