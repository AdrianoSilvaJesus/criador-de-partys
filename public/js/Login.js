function ClickLogin() {
	let loginContainer = document.getElementById("LoginContainer");

    if (!loginContainer.style.display) return loginContainer.style.display = "block";
    
    loginContainer.style.display = "";
}

