const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
	tipo: { type: String, default: "Gratis", required: true },
	valor: { type: String},
	horario: { type: String },
	descricao: { type: String, required: true },	
	instancia: { type: String, required: true },
	nivel: { type: String, required: true },
	owner: { type: String, required: true },
});

module.exports = mongoose.model('Ticket', ticketSchema);