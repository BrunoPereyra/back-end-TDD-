const express = require("express")
const products = require("../controllers/products")
const Router = express.Router()

Router.post("/",products)
module.exports = Router