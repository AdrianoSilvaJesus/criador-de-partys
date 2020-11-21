class LoadingSpinner{
	static Loading(){
		const body = document.getElementsByTagName('body')[0];

		const divLoader = document.createElement('div');
		const loader = document.createElement('div');

		divLoader.className = 'divLoader';
		loader.className = 'loader';

		divLoader.appendChild(loader);
		body.prepend(divLoader);
	}

	static Loaded(){
		const body = document.getElementsByTagName('body')[0];
		const loadSpinner = document.getElementsByClassName('divLoader')[0];

		body.removeChild(loadSpinner);
	}
}