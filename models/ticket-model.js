const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
	tipo: { type: String, default: "Gratis", required: true },
	horario: { type: String, required: true },	
	nivel: { type: String, required: true },
	owner: { type: String, required: true },
	valor: { type: Number, required: true }
});

module.exports = mongoose.model('Ticket', ticketSchema);