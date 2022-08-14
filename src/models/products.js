const { Schema, model } = require("mongoose")
//pensar bien como diseñar con respecto al stock y al enviando
const SchemaProducts = new Schema({
   user: [{
      type: Schema.Types.ObjectId,
      ref: "Users"
   }],
   characteristic: Array,
})