const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title:  {type: String, required : true}, // String is shorthand for {type: String}
  price: Number,
  ratings:   Number,
  inStock : Boolean
});


const Product = mongoose.model('Product', productSchema);


module.exports = Product;