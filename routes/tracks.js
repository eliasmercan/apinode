const express = require("express")
const router = express.Router()
const { getItems, getItem } = require("../controllers/tracks")

//TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems)

module.exports = router