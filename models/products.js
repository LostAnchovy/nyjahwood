var mongoose = require ('mongoose');
var Schema = mongoose.Schema

const productSchema = new Schema({
    product_name:{
        type: String,
        unique: true
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
    },
    dimensions: {
        type: String,
    },
    category:{
        type: String,
        enum:['customtable', 'stool', 'dinningtable'],
    }
}, {timestamps: true });

var Product = mongoose.model('Product', productSchema)
module.exports = Product;