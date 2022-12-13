const mongoose = require("mongoose")

const exerciseScheme = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please add a name']
    },
    sets:{
        type:Number,
        required:[true,'please add a sets']
    },
    reps:{
        type:Number,
        required:[true,'please add a reps']
    },
    weight:{
        type:Number,
        required:[true,'please add a weight']
    },
    rest_time_in_Sec:{
        type:Number,
        required:[true,'please add a rest time']
    },
})



const progremSchema = mongoose.Schema({
    type:{
        type:String,
        required:[true,'please add a type']
    },
    time:{
        type:Number,
        required:[true,'please add a time']
    },
    exercises:[exerciseScheme],
}, {
    timestamps:true
})



module.exports =mongoose.model('Progrem',progremSchema)