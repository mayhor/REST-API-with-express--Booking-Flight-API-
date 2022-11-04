const Flight = require('../models/Flight')

// Get all flights
const allFlights = async(req, res) => {
    try {
        const flights = await Flight.find({})

        res.status(200).json({ flights })
    } catch (error) {
        res.status(500).json({ error })
    }
}

// Get a single flight
const singleFlight = async(req, res) => {
    try {
        const flight = await Flight.findOne({ _id: req.params.id })
        res.status(200).json({ flight })
    } catch (error) {
        res.status(500).json({ error })
    }
}

// create flight
const createFlight = async(req, res) => {
    try {
        const flight = await Flight.create(req.body)
        console.log(req.body)
        res.status(201).json({ flight })
    } catch (error) {
        res.status(500).json({ error })
    }
}

// updat flight
const updateFlight = async(req, res) => {
    try {
        const flight = await Flight.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        res.status(200).json({ flight })
    } catch (error) {
        res.status(500).json({ error })
    }
}

// Get a single flight
const deleteFlight = async(req, res) => {
    try {
        const flight = await Flight.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({ flight })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = {
    allFlights,
    singleFlight,
    createFlight,
    updateFlight,
    deleteFlight
}