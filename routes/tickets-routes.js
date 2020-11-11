const express = require('express');

const router = express.Router();

const ticketsControllers = require('../controllers/ticket-controller');

router.get('/', ticketsControllers.getTickets);

router.get('/:ticketId', ticketsControllers.getTicket);

router.post('/', ticketsControllers.createTicket);

module.exports = router;