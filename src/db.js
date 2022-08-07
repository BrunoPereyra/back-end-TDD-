const mongoose = require("mongoose")
const { MONGO_DB_URI, TEST, NODE_ENV } = require("./config")

const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

const connectionString = NODE_ENV == "test"
    ? TEST.MONGO_DB_URI_TEST
    : MONGO_DB_URI


mongoose.connect(connectionString, mongooseOpts)
    .then(() => console.log(`db on`))
    .catch(error => console.log(error))
