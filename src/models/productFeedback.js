const { model, Schema } = require("mongoose")

const SchemaProductFeedback = new Schema({
    comment: String,
    likes: { type: Number, default: 1 },
    deslikes: { type: Number, default: 1 },
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