class Form{
	contructor(formId){
		this.formId = formId;
	}

	createForm(){
		const formulario = document.createElement('form');

		formulario.id = this.formId;

		document.getElementById('Painel').appendChild(formulario);
	}	

	input(labelText, type, placeholder){
		const inputSection = document.createElement('div');
		const Label = document.createElement('label');
		const Input = document.createElement('input');

		Label.textContent = labelText;
		Input.type = type;
		Input.placeholder = placeholder;

		inputSection.appendChild(Label);
		inputSection.appendChild(Input);

		document.getElementById(this.formId).appendChild(inputSection);
	}
}