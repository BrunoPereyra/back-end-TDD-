const { model, Schema } = require("mongoose")

const SchemaProductFeedback = new Schema({
    comment: String,
    likes: { type: Number, default: 1 },
    deslikes: { type: Number, default: 1 },
    Users: [{
        type: Schema.Types.ObjectId,
        ref: "Users"
    }],
    Products: [{
        type: Schema.Types.ObjectId,
        ref: "Products"
    }],
    date: Date,

})
const ProductsFeedback = model("ProductsFeedback", SchemaProductFeedback)

module.exports = ProductsFeedback