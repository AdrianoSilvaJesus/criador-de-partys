//Carrega o módulo do MySQL
const mysql = require('mysql');

class FazendaDB{
	static connect(){
		const connection = mysql.createConnection({
			host:'localhost',
			user:'',
			password:'',
			database:'fazenda'
		});

		connection.connect();
		
		return connection;
	}

	static saveAnimal(animalInfo){
		return new Promise((resolve,reject) => {
			const connection = FazendaDB.connect();

			// Insere o animal na tabela
			const sqlQuery = "insert into animais set ?";
			
			const query = connection.query(sqlQuery, animalInfo, function(error, results, fields){
				if (error) reject(error);

				resolve('Animal salvo com sucesso !');
			});

			connection.end();
		})
	}

	static getAnimalById(id){
		const connection = FazendaDB.connect();

		// Pega o animal da tabela
		const sqlQuery = "select id, animal, petCod, sexo from animais where id = ?";
		
		const query = connection.query(sqlQuery, id, function(error, results, fields){
			if(error) throw error;

			if(!results.length){
				console.log("Nenhum animal foi encontrado para o id fornecido !");
				return;
			}

			const animal = results[0];
			console.log(animal);
		});

		connection.end();
	};

	static deleteAnimalById(id){
		const connection = FazendaDB.connect();

		// Deleta o animal da tabela
		const sqlQuery = "delete from animais where id = ?";
		
		const query = connection.query(sqlQuery, id, function(error, results, fields){
			if(error) throw error;
			console.log("Carro deletado com sucesso !");
			console.log("Quantidade de registros atualizados: " + results.affectedRows);
		});

		connection.end();
	}
}

module.exports = FazendaDB;