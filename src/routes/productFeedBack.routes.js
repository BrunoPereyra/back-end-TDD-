const express = require("express")
const ProductsFeedbackComm = require("../controllers/productFeedbackcomm")
const Router = express.Router()

Router.post("/",ProductsFeedbackComm)

module.exports = Router