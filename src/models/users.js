const { Schema, model } = require("mongoose")

const SchemaUser = new Schema({
    nameUser: String,
    passwordHash: String,
    fullName: String,
    Gmail: String,
    date: Date,
    typetUser: String,
    phonenumber: Number,
    direction: Array,
    shopping: Array,
    sales: Array,
    lastVisitedProduct: String,
    Products: [{
        type: Schema.Types.ObjectId,
        ref: "Products"
    }],
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