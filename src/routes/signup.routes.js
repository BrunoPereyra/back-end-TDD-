const express = require("express")
const signup = require("../controllers/signup")
const Router = express.Router()

Router.post("/", signup)

module.exports = Router
