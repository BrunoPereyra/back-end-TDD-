const {Schema,Model} = require("mongoose")

const SchemaUser = new Schema({
    nameUser:{
        type:String,
        require:true
    },
    fullName:String,
    Gmail:String,
    passwordHash:String
})
// SchemaUser.set("toJSON", {
//     transform: (document, returnedObject) => {
    
//     }
// })

const Users = Model("Users",SchemaUser)

module.exports = Users