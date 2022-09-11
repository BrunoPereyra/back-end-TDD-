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
app.use("/createProduct", useExtractor, require("./routes/products.routes"))
app.use("/productFeedbackcomm", useExtractor, require("./routes/productFeedBack.routes"))
app.use("/products",useExtractor, require("./routes/GETproducts.routes"))
app.use("/AllMyProducts",useExtractor,require("./routes/AllmyProducts.routes"))
app.use("/HandleProduct",useExtractor,require("./routes/HandleProducts.routes"))
app.use("/postshoppingCart",useExtractor, require("./routes/shoppingCart.routes"))

app.use(handleErrors)
app.use(notFound)


const server = app.listen(config.PORT, () => {
    console.log("server on port 3000");
})

module.exports = { server, app }