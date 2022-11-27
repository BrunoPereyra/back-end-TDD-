const express = require("express")
const productsfortheUser = require("../controllers/productsfortheUser")
const Router = express.Router()

Router.get("/",productsfortheUser)
module.exports = Router