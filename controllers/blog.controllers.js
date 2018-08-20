const Blog = require('../models/blog')

exports.create =(req,res)=>{
    Blog.create({
        title:req.body.title,
        body:req.body.body,
        author: req.body.author
    }).then((newAuthor)=>{
        res.json(newAuthor)
    }).catch(err=>{
        res.send('could not enter new user into DB')
    })
}

exports.findAll =(req,res)=>{
    Blog.find()
    .then((blogs)=>{
        res.json(blogs)
    }).catch((err)=>{
        res.send('could not find all blog enteries')
    })
}

exports.delete = (req, res)=>{
    Blog.remove({_id: req.params.id}).then(()=>{
        res.redirect('/blog')
    }).catch((err)=>{
        res.send('error could not remove blog entry from DB')
    })
}

exports.update = (req, res) => {
    var id = {_id: req.params.blogId}
	Blog.update(id,req.body) 
	.then((updatedBlog) => {
		res.json(updatedBlog)
	}).catch((err)=>{
        res.send('error updating blog information')
    })
};

