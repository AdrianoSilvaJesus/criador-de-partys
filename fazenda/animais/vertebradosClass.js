const Animal = require('./animalClass');

class Mamifero extends Animal{
	constructor(id, animal, petCod, nascimento, ultVisita, sexo, isFilhote, isPrenha){
		super(id, animal, petCod, nascimento, ultVisita, sexo, isFilhote, isPrenha);
	}

	alimentacao(){
		console.log('Animal está mamando...');
	}
}

class Ave extends Animal{
	constructor(id, animal, petCod, nascimento, ultVisita, sexo, isFilhote, isPrenha){
		super(id, animal, petCod, nascimento, ultVisita, sexo, isFilhote, isPrenha);
	}

	alimentacao(){
		console.log('Animal está se ciscando...');
	}

	reproducao(){
		if(!this.isPrenha){
			console.log('A fêmea não está pronta para dar a luz...');
			return;
		}
		console.log('A fêmea está botando um ovo...');
	}
}

exports.Mamifero = Mamifero;
exports.Ave = Ave;