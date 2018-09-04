const Events = require('../models/events')

exports.create=(req,res)=>{
    Events.create({
        Title: req.body.title,
        Date: req.body.date,
        Time: req.body.time,
        Location: req.body.description,
        Description: req.body.description,
    }).then(newEvent=>{
        res.json(newEvent)
    }).catch(err=>{
        res.send('error entering new event into database')
    })
}

exports.findAll = (req,res)=>{
    Events.find()
    .then((events)=>{
        res.json(events)
    }).catch((err)=>{
        res.send(500).send({error:'could not retrieve events'})
    })
}

exports.delete = (req, res)=>{
    Events.remove({_id: req.params.eventsId}).then(()=>{
        res.status(204).end()
    }).catch((err)=>{
        res.send('error could not remove event from DB')
    })
}

