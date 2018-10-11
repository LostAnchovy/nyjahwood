var mongoose = require ('mongoose');

const eventSchema = mongoose.Schema({
    Title:{
        type: String
    },
    Date:{
        type: Date
    },
    Time:{
        type: String
    },
    Location:{
        type:String
    },
    Description:{
        type: String
    }

},{timestamps: true });

var Events = mongoose.model('Events', eventSchema)
module.exports = Events;


