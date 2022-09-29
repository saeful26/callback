const users = document.querySelector("#users > tbody")

function loadUsers () {
	const request = new XMLHttpRequest()
	
	request.open('get', 'data/users.json')
	request.onload = () => {
		try {
			const json = JSON.parse(request.responseText)
			populateUsers(json)
		} catch (e) {
			console.warn("could not load data")
		}
	}
	request.send()
}

// Callback function
function populateUsers(json) {
	console.log(json)
	const tr = document.createElement("tr")

	for (let i = 0; i < 10; i++) {
		let tr = document.createElement('tr')

		let td1 = document.createElement('td')
		td1.innerHTML = json[i].id
		let td2 = document.createElement('td')
		td2.innerHTML = json[i].name
		let td3 = document.createElement('td')
		td3.innerHTML = json[i].username
		let td4 = document.createElement('td')
		td4.innerHTML = json[i].email
		let td5 = document.createElement('td')
		td5.innerHTML = `${json[i].address.street}, ${json[i].address.suite}, ${json[i].address.city}`
		let td6 = document.createElement('td')
		td6.innerHTML = json[i].company.name

		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)
		tr.appendChild(td4)
		tr.appendChild(td5)
		tr.appendChild(td6)
		users.appendChild(tr);
	}
}

document.addEventListener("DOMContentLoaded", () => loadUsers())


