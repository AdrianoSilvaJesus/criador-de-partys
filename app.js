const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const ticketsRoutes = require('./routes/tickets-routes');

app.use(bodyParser.json({ extende: true }));

app.use(cors());

app.use('/api/tickets', ticketsRoutes);

app.use((request,response,next) => {
	const error = new Error('Rota não encontrada');
	error.status = 404;
	next(error);
})

app.use((error, request, response, next) => {
	console.log(error.stack);
	response.status(error.status).json({'error': `Ocorreu um erro: ${error.message}`});
});

mongoose
.connect("mongodb+srv://usuarioadriano:usuarioadriano@cluster0.g1kvj.mongodb.net/instancias?retryWrites=true&w=majority")
.then(() => {
	const server = app.listen(3000,'127.0.0.1',() => {
		const address = server.address().address
		const port = server.address().port
		console.log('Servidor rodando em: http://%s:%s', address, port);
	});
}).catch((error) => {
	console.log(error);
})
