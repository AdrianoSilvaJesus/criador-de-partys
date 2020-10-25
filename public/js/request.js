const GetTickets = () => {
	fetch('http://127.0.0.1:3000/api/tickets').then((response) => {
		response.json().then((data) => {
			console.log(data);
		})
	}).catch((err) => {
		console.log(err);
	})
}

GetTickets();