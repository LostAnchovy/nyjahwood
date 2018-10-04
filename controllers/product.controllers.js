const Product = require('../models/products')

exports.create =(req,res)=>{
    Product.create({
        product_name:req.body.name,
        description:req.body.description,
        price: req.body.price,
        dimensions: req.body.dimensions
    }).then((newProduct)=>{
        res.json(newProduct)
    }).catch(err=>{
        res.send('product not entered into DB')
    })
}

exports.findAll = (req,res)=>{
    Product.find()
    .then((products)=>{
        res.json(products)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve products'})
    })
}

exports.count = (req,res)=>{
    Product.count()
    .then((products)=>{
        res.json(products)
    }).catch((err)=>{
        res.send(500).send({error:'could not event count'})
    })
}

exports.findOne = (req,res) =>{
    var id = {_id: req.params.productId}
    Product.findOne(id)
    .then(product=>{
        res.json(product)
    }).catch((err)=>{
        res.json({error: 'can not find product'})
    })
}

exports.delete = (req, res)=>{
    Product.remove({_id: req.params.productId}).then(()=>{
        res.status(204).end()
    }).catch((err)=>{
        res.send('error could not remove product from DB')
    })
}

exports.update = (req, res) => {
    var id = {_id: req.params.productId}
	Product.findByIdAndUpdate(id,req.body,{new:true}) 
	.then((updatedProduct) => {
		res.json(updatedProduct)
	}).catch((err)=>{
        res.send('error updating product')
    })
};