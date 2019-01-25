var users;
var successfulStatus = 200;

function getUsers() {
	var xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', false);

	xhr.send();
	if (xhr.status != successfulStatus) {
		alert("Data not found. Reload page");
		return;
	}
	var response = JSON.parse(xhr.responseText);
    
    users = response.results;
}

window.onload = function() {
	getUsers();
	createUserItems();
}

function createUserItems() {
	for (var i = 0; i < users.length; i++) {
		var user = users[i];

		var divContentUser = document.createElement('div');
		divContentUser.className = 'content-user';
		document.getElementById('main-users').appendChild(divContentUser);

		var divUserCard = document.createElement('div');
		divUserCard.className = 'user-card';
		divContentUser.appendChild(divUserCard);

		var divPicture = document.createElement('div');
		divPicture.className = 'picture';
		divUserCard.appendChild(divPicture);

		var imgUser = document.createElement('img')
		imgUser.className = 'img-user';
		imgUser.id = [i];
		imgUser.onclick = openModal;
		imgUser.src = user.picture.medium;
		divPicture.appendChild(imgUser);

		var divDescription = document.createElement('div');
		divDescription.className = 'description-user-card';
		divUserCard.appendChild(divDescription);

		var pName = document.createElement('p');
		pName.className = 'name';
		divDescription.appendChild(pName);
		pName.innerHTML = user.name.title + ' ' + user.name.first + ' ' + user.name.last;
		
	}
}

function openModal(event) {
	var id = event.target.id;
	var modal = document.getElementById('myModal');
	var user = users[id];

	var modalImg = document.getElementById('user-img-large');
	modalImg.src = user.picture.large;

	var modalName = document.getElementById('modal-full-name');
	modalName.innerHTML = user.name.title + ' ' + user.name.first + ' ' + user.name.last;

	var modalGender = document.getElementById('modal-user-gender');
	modalGender.innerHTML = user.gender;

	var modalEmail = document.getElementById('modal-user-email');
	modalEmail.innerHTML = user.email;

	var modalLocation = document.getElementById('modal-user-location');
	modalLocation.innerHTML = user.location.state + ' ' + user.location.city + ' ' + user.location.street + ' ' + user.location.postcode;

	var modalPhone = document.getElementById('modal-user-phone');
	modalPhone.innerHTML = user.phone;

	modal.style.display = "block";
}

window.onclick = function(event) {
	var modal = document.getElementById('myModal');
	if (event.target == modal) {
  		modal.style.display = "none";
	}
}

function closeModal() {
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
}



