const Product = require('../models/products')

exports.create =(req,res)=>{
    Product.create({
        product_name:req.body.name,
        description:req.body.description,
        price: req.body.price
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

exports.delete = (req, res)=>{
    Product.remove({_id: req.params.id}).then(()=>{
        res.redirect('/dashboard')
    }).catch((err)=>{
        res.send('error could not remove product from DB')
    })
}