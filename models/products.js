var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

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
    },
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {timestamps: true });

var Product = mongoose.model('Product', productSchema)
module.exports = Product;