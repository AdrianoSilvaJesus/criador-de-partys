const Ticket = require('../models/ticket-model');

const getTickets = async(request,response) => {
	let tickets;
	try{
		tickets = await Ticket.find({});
	}catch(err){
		const error = new Error('Não foi possivel obter os tickets');
		error.status = 500;
		next(error);
	}

	response.status(200).json({tickets: tickets.map(ticket => ticket.toObject({ getters: true }))})
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