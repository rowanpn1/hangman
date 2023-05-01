const mongoose = require("mongoose")

const wordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    }
})

module.exports = mongoose.model("Word", wordSchema)