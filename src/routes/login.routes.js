const express = require("express")
const login = require("../controllers/login")
const Router = express.Router()

Router.post("/", login)
module.exports = Router