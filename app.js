const path = require('path')

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const ticketsRoutes = require('./routes/tickets-routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ extende: true }));

app.use('/', ticketsRoutes);

app.use((request,response) => {
	response.render('404Page', { pageTitle: 'Page not Found', route: request.url });
})

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
