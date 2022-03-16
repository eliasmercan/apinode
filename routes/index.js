const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;
const removeExtension = (fileName) => {
    //TODO track.js [tracks, js]
    return fileName.split('.').shift()
}

const a = fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file) //TODO users, storage, tracks
    if(name !== 'index'){
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //TODO http
    }
})

module.exports = router