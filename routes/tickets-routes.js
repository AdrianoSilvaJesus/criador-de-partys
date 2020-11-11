const express = require('express');

const router = express.Router();

const ticketsControllers = require('../controllers/tickets-controllers');

router.get('/', ticketsControllers.getTickets);

router.get('/:ticketId', ticketsControllers.getTicket);

router.post('/', ticketsControllers.createTicket);

module.exports = router;