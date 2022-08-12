const { Schema, model } = require("mongoose")

const SchemaUser = new Schema({
    nameUser: {
        type: String,
        require: true
    },
    fullName: String,
    Gmail: String,
    passwordHash: String
})
// SchemaUser.set("toJSON", {
//     transform: (document, returnedObject) => {

//         delete passwordHash
//     }
// })

const Users = model("Users", SchemaUser)

module.exports = Users