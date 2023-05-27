const express = require('express');
const { bookTicketController } = require('../controllers/bookTicketController');


const router = express.Router();



// route
router.post("/bookTickets", bookTicketController)

module.exports = router;