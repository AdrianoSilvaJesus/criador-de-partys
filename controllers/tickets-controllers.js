const Ticket = require('../models/ticket-model');
const HttpError = require('../models/http-error');

const getTicket = async(request, response, next) => {
	const { ticketId } = request.params;
	
	let ticket;
	try{
		ticket = await Ticket.findById(ticketId);
	}catch(err){
		const error = new HttpError(
			'Não foi possivel encontrar o ticket.',
			500
		);
		return next(error);
	}

	if(!ticket){
		const error = new HttpError(
			'Não foi possivel encontrar um ticket para o ID fornecido.',
			404
		);
		return next(error);
	}

	response.json({ ticket: ticket });
}

const getTickets = async(request,response, next) => {
	let tickets;
	try{
		tickets = await Ticket.find({},"-valor");
	}catch(err){
		const error = new Error('Não foi possivel obter os tickets');
		error.status = 500;
		return next(error);
	}

	response.status(200).json({tickets: tickets.map(ticket => ticket.toObject({ getters: true }))})
};

const createTicket = async(request, response, next) => {
	const { titulo, descricao, instancia, nivel, valor, horario, owner, owner2, vaga1, vaga2, vaga3, vaga4, vaga5, vaga6, vaga7, vaga8} = request.body;
	const createdTicket = new Ticket({
		titulo,
		descricao,
		instancia,
		nivel,
		valor,
		horario,
		owner
	});


	try{
		await createdTicket.save();
	}catch(err){
		console.log(err);
		return response.status(500).json({"message": "Erro no servidor"});
	}

	response.redirect('/api/tickets');
}

exports.getTickets = getTickets;
exports.getTicket = getTicket;
exports.createTicket = createTicket;