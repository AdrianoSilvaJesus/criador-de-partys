const Ticket = require('../models/ticket-model');

const getTickets = async(request,response) => {
	let tickets;
	try{
		tickets = await Ticket.find({},"-valor");
	}catch(err){
		const error = new Error('Não foi possivel obter os tickets');
		error.status = 500;
		next(error);
	}

	response.status(200).json({tickets: tickets.map(ticket => ticket.toObject({ getters: true }))})
};

const createTicket = async(request, response) => {
	const { titulo, descricao, instancia, nivel, valor, owner, owner2, vaga1, vaga2, vaga3, vaga4, vaga5, vaga6, vaga7, vaga8} = request.body;
	const createdTicket = new Ticket({
		titulo,
		descricao,
		instancia,
		nivel,
		valor,
		owner,
		owner2,
		vaga1,
		vaga2,
		vaga3,
		vaga4,
		vaga5,
		vaga6,
		vaga7,
		vaga8
	});


	try{
		await createdTicket.save();
	}catch(err){
		return response.status(500).json({"message": "Erro no servidor"});
	}

	response.redirect('/api/tickets');
}

exports.getTickets = getTickets;
exports.createTicket = createTicket;