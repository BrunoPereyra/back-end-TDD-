const { Schema, model } = require("mongoose")

const SchemaUser = new Schema({
    nameUser: String,
    passwordHash: String,
    fullName: String,
    Gmail: String,
    typetUser: String,
    productos: [{
        type: Schema.Types.ObjectId,
        ref: "Products"
    }],
    phonenumber: Number,
    direction: Array,
    compras: Array,
    ventas: Array,
    lastVisitedProduct: String,
    shoppingCart: [{
        type: Schema.Types.ObjectId,
        ref: "Products"
    }]
})
// SchemaUser.set("toJSON", {
//     transform: (document, returnedObject) => {

//         delete passwordHash
//     }
// })

const Users = model("Users", SchemaUser)

module.exports = Users