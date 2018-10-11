const Blog = require('../models/blog')

exports.create =(req,res)=>{
    Blog.create({
        title:req.body.title,
        body:req.body.body,
        author: req.body.author,
        image: req.body.image
    }).then((newAuthor)=>{
        res.json(newAuthor)
    }).catch(err=>{
        res.status(501).send({ success: false, msg:'can not enter Blog into DB'})
    })
}

exports.findAll =(req,res)=>{
    Blog.find()
    .then((blogs)=>{
        res.json(blogs)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'can not find all Blog enteries'})
    })
}

exports.delete = (req, res)=>{
    Blog.remove({_id: req.params.blogId}).then(()=>{
        res.send('Blog has been removed from DB')
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'could not remove product from DB'})
    })
}

exports.count = (req,res)=>{
    Blog.count()
    .then((blogs)=>{
        res.json(blogs)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'could not count Blogs'})
    })
}
exports.findOne = (req,res) =>{
    var id = {_id: req.params.blogId}
    Blog.findOne(id)
    .then(blog=>{
        res.json(blog)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'could not find Blog'})
    })
}

exports.update = (req, res) => {
    var id = {_id: req.params.blogId}
	Blog.findByIdAndUpdate(id,req.body, {new:true}) 
	.then((updatedBlog) => {
		res.json(updatedBlog)
	}).catch((err)=>{
        res.send(501).send({succcess: false, msg: 'error updating blog'})
    })
};


