const { model, Schema } = require("mongoose")

const SchemaProductFeedback = new Schema({
    comment: String,
    likes: Number,
    deslikes: Number,
    user: [{
        type: Schema.Types.ObjectId,
        ref: "Users"
    }],
    Products: [{
        type: Schema.Types.ObjectId,
        ref: "Products"
    }],

})
const ProductsFeedback = model("ProductsFeedback", SchemaProductFeedback)

module.exports = ProductsFeedback