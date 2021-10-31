const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    appId: {
        type: Schema.Types.ObjectId,
        ref: 'App'
    },
    stageId: {
        type: Schema.Types.ObjectId,
        ref: 'Stage'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    startsAt: {
        type: Number,
        required: true
    },
    endsAt: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Event', eventSchema)