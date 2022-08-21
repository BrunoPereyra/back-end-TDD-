const express = require("express")
const  GETproducts  = require("../controllers/GETproducts")
const Router = express.Router()
Router.get("/",GETproducts)

module.exports = Router