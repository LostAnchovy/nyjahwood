const Events = require('../models/events')

exports.create=(req,res)=>{
    Events.create({
        Title: req.body.title,
        Date: req.body.date,
        Time: req.body.time,
        Location: req.body.location,
        Description: req.body.description,
    }).then(newEvent=>{
        res.json(newEvent)
    }).catch(err=>{
        res.status(501).send({ success: false, msg:'can not enter Event into DB'})
    })
}

exports.findAll = (req,res)=>{
    Events.find()
    .then((events)=>{
        res.json(events)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'can not find All events'})
    })
}

exports.count = (req,res)=>{
    Events.count()
    .then((events)=>{
        res.json(events)
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'can not count events'})
    })
}

exports.delete = (req, res)=>{
    var id = req.params.eventsId
    Events.remove({_id: req.params.eventsId}).then(()=>{
        res.status(200).send({success: true, msg:`event ${id} was successfully deleted`})
    }).catch((err)=>{
        res.status(501).send({ success: false, msg:'can not delete event from DB'})
    })
}

exports.findOne = (req,res) =>{
    var id = {_id: req.params.eventId}
    Events.findOne(id)
    .then(event=>{
        res.json(event)
    }).catch((err)=>{
        res.json({error: 'can not find event'})
    })
}

exports.update = (req, res) => {
    var id = {_id: req.params.eventsId}
	Events.findByIdAndUpdate(id,req.body,{new:true}) 
	.then((updatedEvent) => {
		res.json(updatedEvent)
	}).catch((err)=>{
        res.send('error updating event information')
    })
};

