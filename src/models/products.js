const { Schema, model } = require("mongoose")

const SchemaProducts = new Schema({
   nameProduct: String,
   user: [{
      type: Schema.Types.ObjectId,
      ref: "Users"
   }],
   type: String,
   characteristic: Array,
   ProductsFeedback: [{
      type: Schema.Types.ObjectId,
      ref: "ProductsFeedback"
   }],
   date: Date,
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
      },
   },
   offers:Number,
   price:Number,
   keywordOne:String,
   keywordTwo:String,
   keywordThree:String,
   keywordFour:String,

})
const Products = model("Products", SchemaProducts)
module.exports = Products