const mongoose = require('mongoose')

const FlightScheme = new mongoose.Scheme({
    title: String,
    time: String,
    price: Number,
    date: String

})

module.exports = mongoose.model("Flight", FlightScheme)