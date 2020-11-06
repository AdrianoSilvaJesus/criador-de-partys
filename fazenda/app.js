// Carrega o módulo do MySQL
const mysql = require('mysql');

// Cria a conexão com o MySQL
const connection = mysql.createConnection({
	host:'localhost',
	user:'',
	password:'',
	database:'fazenda'
});

// Conecta no banco de dados
connection.connect()

// Cria uma consulta
const sqlQuery = "select id, animal, sexo from animais";

connection.query(sqlQuery, function(error, results, fields){
	if(error) console.log(error);

	const animais = results;

	for(animal of animais){
		console.log(animal);
	}
});

connection.end();
