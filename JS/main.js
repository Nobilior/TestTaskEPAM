var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', false);

xhr.send();

if (xhr.status != 200) {
}

var response = JSON.parse(xhr.responseText);
var users = response.results;

function closeModal() {
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
}


window.onload = function() {
	for (var i = 0; i < 50; i++) {
		var user = users[i];

		var divContentUser = document.createElement('div');
		divContentUser.className = 'content-user';
		document.body.children[1].children[0].children[0].appendChild(divContentUser);

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
		divPicture.appendChild(imgUser);

		var divDescription = document.createElement('div');
		divDescription.className = 'description-user-card';
		divUserCard.appendChild(divDescription);

		var pName = document.createElement('p');
		pName.className = 'name';
		divDescription.appendChild(pName);

		var pNameElement = document.getElementsByClassName('name')[i];
		pNameElement.innerHTML = user.name.title + ' ' + user.name.first + ' ' + user.name.last;

		var imgUserElement = document.getElementsByClassName('img-user')[i];
		imgUserElement.src = user.picture.medium;
	}
}

function openModal(event) {
	var id = event.target.id;
	var modal = document.getElementById('myModal');
	var user = users[id];

	var modalImg = document.getElementsByClassName('modal-img')[0];
	modalImg.src = user.picture.large;

	var modalName = document.getElementsByClassName('modal-name')[0];
	modalName.innerHTML = user.name.title + ' ' + user.name.first + ' ' + user.name.last;

	var modalGender = document.getElementsByClassName('modal-gender')[0];
	modalGender.innerHTML = user.gender;

	var modalEmale = document.getElementsByClassName('modal-email')[0];
	modalEmale.innerHTML = user.email;

	var modalLocation = document.getElementsByClassName('modal-location')[0];
	modalLocation.innerHTML = user.location.state + ' ' + user.location.city + ' ' + user.location.street + ' ' + user.location.postcode;

	var modalPhone = document.getElementsByClassName('modal-phone')[0];
	modalPhone = user.phone;

    modal.style.display = "block";
}

window.onclick = function(event) {
	var modal = document.getElementById('myModal');
	if (event.target == modal) {
  		modal.style.display = "none";
	}
}



