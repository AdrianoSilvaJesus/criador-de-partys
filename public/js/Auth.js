const login = async(event) => {
	event.preventDefault();

	const authType = event.target.innerText === 'Cadastrar' ? 'signup' : 'login';

	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const password = document.getElementById('password');

	if(authType === 'login'){
		LoadingSpinner.Loading();
		fetch('http://127.0.0.1:3000/api/login/login', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body:JSON.stringify({
				email: email.value,
				password: password.value
			})
		}).then((response) => {
			if(response.status !== 200){
				response.json().then((error) => {
					LoadingSpinner.Loaded();
					Notification.alert('danger', 'Erro de Autenticação', error.message);
				})
				return;
			}
			response.json().then((authData) => {
				console.log(authData);
				LoadingSpinner.Loaded();
				Notification.alert('success', 'Login feito com sucesso.',`Logado como: ${authData.email}`);
			});
		}).catch((err) => {
			LoadingSpinner.Loaded();
			console.log(err);
		})
		return;
	}
	LoadingSpinner.Loading();
	fetch('http://127.0.0.1:3000/api/login/signup', {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body:JSON.stringify({
			name: name.value,
			email: email.value,
			password: password.value
		})
	}).then((response) => {
		if(response.status !== 201){
			response.json().then((error) => {
				LoadingSpinner.Loaded();
				Notification.alert('danger', 'Erro de Cadastramento', error.message);
			})
			return;
		}
		response.json().then((authData) => {
			console.log(authData);
			LoadingSpinner.Loaded();
			Notification.alert('success', 'Usuário criado com sucesso.',`Logado como: ${authData.email}`);
		});
	}).catch((err) => {
		LoadingSpinner.Loaded();
		console.log(err);
	})
}

const signout = () => {

}