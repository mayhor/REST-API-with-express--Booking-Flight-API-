const mongoose = require('mongoose')

const FlightSchema = new mongoose.Schema({
    title: String,
    time: String,
    price: Number,
    date: String

})

module.exports = mongoose.model("Flight", FlightSchema)