const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
	tipo: { type: String, default: "Gratis", required: true },
	valor: { type: String, required: true },
	descricao: { type: String, required: true },	
	instancia: { type: String, required: true },
	nivel: { type: String, required: true },
	owner: { type: String, required: true },
	owner2: { type: String, required: true },
	vaga1: { type: String},
	vaga2: { type: String},
	vaga3: { type: String},
	vaga4: { type: String},
	vaga5: { type: String},
	vaga6: { type: String},
	vaga7: { type: String},
	vaga8: { type: String}
});

module.exports = mongoose.model('Ticket', ticketSchema);