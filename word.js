const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
    name: String
});

moodule.exports = mongoose.model("user", wordSchema);