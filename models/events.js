var mongoose = require ('mongoose');

const eventSchema = mongoose.Schema({
    Title:{
        type: String
    },
    Date:{
        type: String
    },
    Time:{
        type:String
    },
    Location:{
        type:String
    },
    Description:{
        type: String
    }

},{timestap: true});

var Events = mongoose.model('Events', eventSchema)
module.exports = Events;


