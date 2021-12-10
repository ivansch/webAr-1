const {  
    preloadProject } = require('./preloaderProject.js');

async function preloader() {
    await preloadProject()
}

module.exports = {
    preloader
}