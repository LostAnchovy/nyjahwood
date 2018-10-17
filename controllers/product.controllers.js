const Product = require('../models/products')

exports.create =(req,res)=>{
    Product.create({
        product_name:req.body.name,
        description:req.body.description,
        price: req.body.price,
        dimensions: req.body.dimensions,
        category: req.body.category
    }).then((newProduct)=>{
        res.json(newProduct)
    }).catch(err=>{
        res.status(501).send({ success: false, msg: 'Product not entered into DB' })
    })
}

exports.findAll = (req,res)=>{
    Product.find()
    .then((products)=>{
        res.json(products)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'could not retrieve products'})
    })
}

exports.findCustomTables = (req, res) =>{
    Product.find({
        category: 'customtable'
    }).then(product=>{
        res.json(product)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'could not retrieve products'})
    })
}

exports.findDiningTables = (req, res) =>{
    Product.find({
        category: 'dinningtable'
    }).then(product=>{
        // res.send(200).res.json(product)
        res.json(product)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'could not retrieve products'})
    })
}

exports.findStools= (req, res) =>{
    Product.find({
        category: 'stool'
    }).then(product=>{
        res.json(product)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'could not retrieve stools products'})
    })
}

exports.count = (req,res)=>{
    Product.count()
    .then((products)=>{
        res.json(products)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'could not event count'})
    })
}

exports.findOne = (req,res) =>{
    var id = {_id: req.params.productId}
    Product.findOne(id)
    .then(product=>{
        res.json(product)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'can not find product'})
    })
}

exports.delete = (req, res)=>{
    var id = req.params.productId
    Product.remove({_id: req.params.productId}).then(()=>{
        res.status(200).send({success: true, msg:`product ${id} was successfully deleted`})
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'can not remove item from DB'})
    })
}

exports.update = (req, res) => {
    var id = {_id: req.params.productId}
	Product.findByIdAndUpdate(id,req.body,{new:true}) 
	.then((updatedProduct) => {
		res.json(updatedProduct)
	}).catch((err)=>{
        res.status(501).send({ success: false, msg:'error updating product'})
    })
};