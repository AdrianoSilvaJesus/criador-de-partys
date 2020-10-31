class Form{
	constructor(formId){
		this.formId = formId;
	}

	createForm(formTitle){
		const formulario = document.createElement('form');
		const titulo = document.createElement('h2');

		formulario.id = this.formId;
		titulo.textContent = formTitle;

		formulario.appendChild(titulo);
		document.getElementById('Painel').appendChild(formulario);
	}	

	input(labelText, type, name, placeholder){
		const inputSection = document.createElement('div');
		const Label = document.createElement('label');
		const Input = document.createElement('input');

		Label.textContent = labelText;

		Input.type = type;
		Input.name = name;
		Input.id = labelText;
		Input.placeholder = placeholder;

		inputSection.appendChild(Label);
		inputSection.appendChild(Input);

		document.getElementById(this.formId).appendChild(inputSection);
	}
}