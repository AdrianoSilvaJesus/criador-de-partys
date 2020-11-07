const FazendaDB = require('./FazendaDB');
const { Mamifero, Ave } = require('./animais/vertebradosClass');

// Crie uma variavel (animal) e faça um instância do tipo Mamifero ou Ave
// Depois voce tem que passar como parâmetro os dados: id, animal, petCod, nascimento, ultVisita, sexo, isFilhote, isPrenha

const cavalo = new Mamifero(05, 'Cavalo', 345, 2004, 1989, 'M', 0, 0);
const galinha = new Ave(02, 'Galinha', 346, 2069, 1876, 'F', 1, 0);

// Todo animal seja Mamifero ou Ave tem um método chamado "salvar()" que é herdado da classe pai "Animal" que salva esta animal no DB 
cavalo.salvar();

// Todo animal seja Mamifero ou Ave tem um método chamado "alimentcao()" herdado da classe pai "Animal" que sofre alterações devido ao polimorfismo que faz o animal se alimentar 
cavalo.alimentacao();

// Todo animal seja Mamifero ou Ave tem um método chamado "reproducao()" herdado da classe pai "Animal" que às vezes sofre alterações devido ao polimorfismo
cavalo.reproducao();

// O método getAnimalById pega o animal do banco de dados baseado no Id
FazendaDB.getAnimalById(05);

// O método deleteAnimalById deleta o animal do banco de dados baseado no Id
// Comentei o método para evitar erros...

//FazendaDB.deleteAnimalById(05);

