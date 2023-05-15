const mongoose = require("mongoose")

const setSchema = mongoose.Schema({
    reps: {
        type: Number,
        required: [true, 'please add reps']
    },
    weight: {
        type: Number,
        required: [true, 'please add a weight']
    },
})
const exerciseScheme = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    sets: [setSchema],
    rest_time_in_Sec: {
        type: Number,
        required: [true, 'please add a rest time']
    },
})

const practiceSchema = mongoose.Schema({
    type: {
        type: String,
        required: [true, 'please add a type']
    },
    time: {
        type: Number,
        required: [true, 'please add a time']
    },
    date: {
        type: Date,
        required: [true, 'please add a date']
    },
    exercises: [exerciseScheme],
},
)

const UserSchema = mongoose.Schema({
    UserID: {
        type: String,
        required: [true, 'UseID is required']
    },
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    practices: {
        type: [practiceSchema],
        default: [],
    },
},
    {
        timestamps: true,
    });

module.exports = mongoose.model('User', UserSchema);
