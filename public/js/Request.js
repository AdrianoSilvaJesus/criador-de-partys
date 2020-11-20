const GetTickets = () => new Promise((resolve, reject) => {
		fetch('http://127.0.0.1:3000/api/tickets').then((response) => {
			response.json().then((data) => {
				resolve(data);
			})
		}).catch((err) => {
			reject(err);
		})
	});

const RenderTickets = async() => {
	let tickets;
	try{
		tickets = await GetTickets();
	}catch(err){
		Notification.alert('danger', 'Erro na Requisição', 'Não foi possivel obter os tickets tente novamente mais tarde !');
		return;
	}
	console.log(tickets);
}