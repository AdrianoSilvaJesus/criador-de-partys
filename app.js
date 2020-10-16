const path = require('path')

const express = require('express');

const app = express();

const rootPath = require('./util/rootPath');
const data = require('./controllers/index');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(request,response) => {
	response.render('index', {pageTitle: 'Instancia desejada'});
});

app.use((request,response) => {
	response.render('404Page', { pageTitle: 'Page not Found', route: request.url });
})

const server = app.listen(3000,'127.0.0.1',() => {
	const address = server.address().address
	const port = server.address().port
	console.log('Servidor rodando em: http://%s:%s', address, port);
});
