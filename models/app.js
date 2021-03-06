const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('App', appSchema);