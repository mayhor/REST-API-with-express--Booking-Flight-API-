const express = require('express');

const router = express.Router();
const {
    allFlights,
    singleFlight,
    createFlight,
    updateFlight,
    deleteFlight
} = require('../controllers/flightController');

// get all flight
router.get('/', allFlights)

// get single flight
router.get('/flights/:id', singleFlight)

// create flight
router.post('/flight', createFlight)

// update flight
router.patch('/flights/:id', updateFlight)

// delete flight 
router.delete('/flights/:id', deleteFlight)

module.exports = router;