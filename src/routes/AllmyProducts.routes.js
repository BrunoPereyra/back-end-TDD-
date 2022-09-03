const express = require("express")
const AllMyProducts = require("../controllers/AllmyProducts")
const Router = express.Router()

Router.get("/",AllMyProducts)

module.exports= Router