const express = require("express")
const Router = express.Router()
const postshoppingCart = require("../controllers/postshoppingCart")

Router.post("/",postshoppingCart)
module.exports = Router