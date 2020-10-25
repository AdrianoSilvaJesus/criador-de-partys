const Ticket = require('../models/ticket-model');

const getTickets = (request,response) => {
	response.render('index', {
		pageTitle: 'Instancia desejada',
	});
};


const createTicket = async(request, response) => {
	const { tipo, horario, nivel, owner, valor } = request.body;

	const createdTicket = new Ticket({
		tipo,
		horario,
		nivel,
		owner,
		valor
	});


	try{
		await createdTicket.save();
	}catch(err){
		console.log(err);
		return response.status(500).json({"message": "Erro no servidor"});
	}

	response.status(201).json({"message": "Ticket criado com sucesso"})
}

exports.getTickets = getTickets;
exports.createTicket = createTicket;