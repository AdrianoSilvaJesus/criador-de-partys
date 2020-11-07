const FazendaDB = require('../FazendaDB');

class Animal{
	constructor(id, animal, petCod, nascimento, ultVisita, sexo, isFilhote, isPrenha){
		this.id = id;
		this.animal = animal;
		this.petCod = petCod;
		this.nascimento = nascimento;
		this.ultVisita = ultVisita;
		this.sexo = sexo;
		this.isFilhote = isFilhote;
		this.isPrenha = isPrenha;
	}

	alimentacao(){
		console.log('O animal esta se alimentando...')
	}

	reproducao(){
		if(!this.isPrenha){
			console.log('A fêmea não está pronta para dar a luz...');
			return;
		}
		console.log('A fêmea está dando a luz...');
	}

	async salvar(){
		let resultado;
		try{
			resultado = await FazendaDB.saveAnimal(this);
		}catch(error){
			console.log(error);
			return;
		}
		console.log(resultado);

	}
}

module.exports = Animal;