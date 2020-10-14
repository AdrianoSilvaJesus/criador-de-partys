const path = require('path')

const express = require('express');

const app = express();

const rootPath = require('./util/rootPath');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(request,response) => {
	response.sendFile(path.join(rootPath, 'views', 'index.html'));
});

const server = app.listen(3000,'127.0.0.1',() => {
	const address = server.address().address
	const port = server.address().port
	console.log('Servidor rodando em: http://%s:%s', address, port);
});