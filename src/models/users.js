const { Schema, model } = require("mongoose")

const SchemaUser = new Schema({
    nameUser: String,
    passwordHash: String,
    fullName: String,
    Gmail: String,
})
// SchemaUser.set("toJSON", {
//     transform: (document, returnedObject) => {

//         delete passwordHash
//     }
// })

const Users = model("Users", SchemaUser)

module.exports = Users