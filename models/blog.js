var mongoose = require ('mongoose');

const blogSchema = mongoose.Schema({
    title:{
        type: String,
    },
    body:{
        type: String,
    },
    author:{
        type: String,
    },
},{timestamps: true });

var Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;
