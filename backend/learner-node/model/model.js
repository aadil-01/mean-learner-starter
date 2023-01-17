const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    task: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('Data', dataSchema)