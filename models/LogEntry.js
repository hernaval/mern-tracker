const mongoose = require("mongoose")

const Schema = mongoose.Schema


const requireString = {
    type : String,
    required : true
}


const requireNumber = {
    type : Number,
    required : true
}

const logEntrySchema = new Schema({
    title : requireString,
    description : String,
    comments : String,
    image : String,
    latitude :
        requireNumber,
    longitude : 
        requireNumber,
    visitDate : {
        type : Date,
        required : true,
        default : Date.now
    },
    rating : {
        type : Number,
        min : 0,
        max : 10,
        default : 0
    }

},{
    timestamps : true
})

const LogEntry = mongoose.model("LogEntry",logEntrySchema)

module.exports = LogEntry