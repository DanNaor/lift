const mongoose = require("mongoose")
const exercise = require("./programModel")


const programHistoryScheme = mongoose.Schema({
    UID: {
        type: String,
        required: [true, 'please add a UID']
    },
    type: {
        type: String,
        required: [true, 'please add a type']
    },
    date: {
        type: Date,
        required: [true, 'please add a date']
    },
    workout_starting_time: {
        type: Number,
        required: [true, 'please add a workout_starting_time']
    },
    time_took: {
        type: Number,
        required: [true, 'please add a time_took']
    },

    exercises: [exercise.schema],
}, {
    timestamps: true
})



module.exports = mongoose.model('programHistory', programHistoryScheme)