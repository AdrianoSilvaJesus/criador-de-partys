function ClickLogin() {
	let loginContainer = document.getElementById("LoginContainer");

     if (!loginContainer.style.display) return loginContainer.style.display = "block"; 

     loginContainer.style.display = "";
}

const changeFormAuthType = (event) => {
    event.preventDefault();

    const form = document.getElementById('LoginContainer');
    const authModeButton = document.getElementById('changeAuthMode');
    const authButton = document.getElementById('authButton');
    const userNameLabel = document.getElementById('LabelUserName');
    const userNameInput = document.getElementById('name');

    if(userNameInput.style.display !== 'none'){ 
        userNameInput.style.display = 'none';
        userNameLabel.style.display = 'none';
        authButton.innerText = 'Login';
        authModeButton.innerText = 'Cadastre-se';
        return;
    }

    userNameInput.style.display = 'block';
    userNameLabel.style.display = 'block';
    authButton.innerText = 'Cadastrar';
    authModeButton.innerText = 'Iniciar Sessão';
}