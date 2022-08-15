const { Schema, model } = require("mongoose")
const SchemaProducts = new Schema({
   nameProduct: String,
   user: [{
      type: Schema.Types.ObjectId,
      ref: "Users"
   }],
   type: String,
   characteristic: Array,
   productFeedback: [{
      type: Schema.Types.ObjectId,
      ref: "productFeedback"
   }],
   stock: Number,
   productStars: {
      cantidad: Number,
      promedio: Number,
      starts: {
         one: Number,
         two: Number,
         three: Number,
         four: Number,
         five: Number
      }
   },

})
const Products = model("Products", SchemaProducts)
module.exports = Products