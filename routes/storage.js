const multer = require("multer")
const express = require("express")
const router = express.Router()

//TODO http://localhost:3001/api/storage

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`
        cb(null, pathStorage)
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split('.').pop(); //TODO ["name", "png"]
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename)
    },
})


router.post("/", (req, res)=>{
    res.send({a:1})
})

module.exports = router