const express = require("express")
const HandleProduct = require("../controllers/HandleProducts")
const Router = express.Router()

Router.post("/",HandleProduct)

module.exports = Router