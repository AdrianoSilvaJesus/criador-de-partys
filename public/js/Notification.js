class Notification{
	static alert(className,title, message){
		const notificationContainer = document.createElement('div');
		const notificationTitle = document.createElement('h3');
		const notificationMessage = document.createElement('p');
		const closeX = document.createElement('p');

		notificationContainer.className = `notification  ${className}`;
		notificationTitle.textContent = title;
		notificationMessage.textContent = message;

		notificationContainer.appendChild(closeX);
		notificationContainer.appendChild(notificationTitle);
		notificationContainer.appendChild(notificationMessage);

		document.getElementsByTagName('body')[0].appendChild(notificationContainer);
		
		Notification.close();
	}

	static close(){
		setTimeout(() => {
			document.getElementsByClassName('notification')[0].remove();
		},3000);
	}
}
