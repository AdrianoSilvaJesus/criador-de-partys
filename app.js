const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const ticketsRoutes = require('./routes/tickets-routes');

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/tickets', ticketsRoutes);

app.use((request,response,next) => {
	const error = new Error('Rota não encontrada');
	error.status = 404;
	next(error);
})

app.use((error, request, response, next) => {
	if(response.headerSent){
		return next(error);
	}
	response.status(error.code || 500);
	response.json({ message: error.message  || "Um error desconhecido ocorreu" });
});

mongoose
.connect(`mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASSWORD }@cluster0.g1kvj.mongodb.net/${ process.env.DB_NAME }?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
	const server = app.listen(3000,'127.0.0.1',() => {
		const address = server.address().address
		const port = server.address().port
		console.log('Servidor rodando em: http://%s:%s', address, port);
	});
}).catch((error) => {
	console.log(error);
})
