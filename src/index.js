const config = require("./config")
require("./db")
const express = require("express");
const app = express()
const handleErrors = require("./middleware/handleErrors");
const notFound = require("./middleware/notFound")
const useExtractor = require("./middleware/useExtractor")

app.use(express.json())

app.use("/signup", require("./routes/signup.routes"))
app.use("/login", require("./routes/login.routes"))
app.use("/createProduct",useExtractor,require("./routes/products.routes"))

app.use(handleErrors)
app.use(notFound)


const server = app.listen(config.PORT, () => {
    console.log("server on port 3000");
})

module.exports = { server,app }