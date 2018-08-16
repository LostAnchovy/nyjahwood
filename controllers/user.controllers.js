const User = require('../models/user')

exports.create = (req, res)=>{
    User.create({
        first_name:req.body.firstname,
        last_name:req.body.lastname,
        email:req.body.email,
        user_name:req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then(()=>{
        res.redirect('/')
    }).catch(err=>{
        res.send('new user not entered into DB')
    })
  }

exports.findAll = (req,res)=>{
    User.find()
    .then((users)=>{
        res.json(users)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve user'})
    })
}