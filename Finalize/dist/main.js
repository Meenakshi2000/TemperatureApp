(function WeatherApp() {
	const searchBar = document.querySelector('.search-bar');
	const searchButton = document.querySelector('.search-button');
	const region = document.querySelector('.location');
	// const condition = document.querySelector('.condition').querySelector('span');
	const temperature = document
		.querySelector('.temperature')
		.querySelector('span');
	// const wind = document.querySelector('.wind').querySelector('span');
	// const feelsLike = document
	// 	.querySelector('.feels-like')
	// 	.querySelector('.fl-value');
	const humidity = document.querySelector('.humidity').querySelector('span');
	// const pressure = document.querySelector('.pressure').querySelector('span');
	const conditionIcon = document.querySelector('.condition').querySelector('i');
	const weatherLeft = document.querySelector('.weather-left');
	const weatherRight = document.querySelector('.weather-right');
	const line = document.querySelector('.line');

	init();

	function init() {
		removeAnimation();

		// event listening
		window.addEventListener('DDOMContentLoaded', getInitialData());
		// searchButton.addEventListener('click', handleSearch);
		// window.addEventListener('keydown', handleKeyboard);
	}

	// this function gets the weather data of the location of the user when the website first loads
	// async function getInitialData() {
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition(async (position) => {
	//             const lat = position.latitude;
	// 			const long = position.longitude;

	// 			const url = `https://api.thingspeak.com/channels/584824/feeds.json?lat=${lat}&long=${long}key=Y6LO9XZPZB02XSSW&results=1`;

	// 			const response = await fetch(url, { mode: 'cors' });
	// 			const data = await response.json();


	// 			displayData(data);
	// 		});
	// 	} else {
	// 		const data = await getData('Delhi');
	// 		displayData(data);
	// 	}
	// }
	async function getInitialData() {

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				const lat = position.latitude;
				const long = position.longitude;

				const url = `https://api.thingspeak.com/channels/584824/feeds.json?lat=${lat}&long=${long}key=Y6LO9XZPZB02XSSW&result=1`;

				const response = await fetch(url);
				const data = await response.json();


				displayData(data);
			});




			setTimeout(getInitialData, 10000);
		}
		else {


			const data = await getData('Delhi');
			displayData(data);
		}


	}
	// setTimeout(
	// 	window.location.reload(1);



	// },10000);
	// async function getData(location) {
	// 	try {
	// 		const url = `https://api.thingspeak.com/channels/584824/feeds.json?q=${location}key=Y6LO9XZPZB02XSSW&results=1'`;
	// 		// const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=34fbec596ce6ee0a4ef569154cebd76e&units=metric`;
	// 		const initialResponse = await fetch(url, { mode: 'cors' });
	// 		if (!initialResponse.ok) {
	// 			throw new Error('');
	// 		} else {
	// 			const response = await initialResponse.json();
	// 			return response;
	// 		}
	// 	} catch (error) {
	// 		console.clear();
	// 		alert('Cannot find location');
	// 	}
	// }

	function displayData(data) {
		reAnimate();
		region.textContent = data.name;
		// condition.textContent = data.weather[0].main;
		temperature.textContent = String(Math.round(Number(data.field1)));
		// wind.textContent = `${data.wind.speed} m/s`;
		// feelsLike.textContent = String(Math.round(Number(data.main.feels_like)));
		humidity.textContent = `${data.field2}%`;
		var randomColor = Math.floor(Math.random() * 16777215).toString(16);
		document.body.style.backgroundColor = "#" + randomColor;
		// pressure.textContent = `${data.main.pressure} hPa`;
		// changeIcon(data.field1);
	}

	// changeColor(); 
	// change the UI on the button
	// function updateButton(field2) {
	// 	if (!String.prototype.trim) {
	// 		String.prototype.trim = function() { return this.replace(/^\s+|\s+$/, ''); };
	// 	}

	// 	if (document.getElementById("switch_status").innerHTML.trim() == "") {
	// 		document.getElementById("switch_status").innerHTML = 'Switched on.';
	// 		history.pushState({}, null, 'https://api.thingspeak.com/channels/584824/feeds.json?lat=${lat}&long=${long}key=Y6LO9XZPZB02XSSW&field2=1');

	// 	} else {
	// 		document.getElementById("switch_status").innerHTML = 'Switched off.';

	// 		history.pushState({}, null, 'https://api.thingspeak.com/channels/584824/feeds.json?lat=${lat}&long=${long}key=Y6LO9XZPZB02XSSW&field2=0');
	// 	}
	// }

	// function myFunction() {

	// 	 if(window.location.href.indexOf("&result=1")){
	// 		document.getElementById("switch_status").innerHTML = 'Switched off.'
	// 		window.location.href = "&field2=0";

	// 	 }else{
	// 		document.getElementById("switch_status").innerHTML = 'Switched on.'
	// 		window.location.href = "&field2=1";
	// 	 }
	//   }
	//   function myonFunction() {
	// 	document.getElementById("switch_status").innerHTML = 'Switched on.';
	// 	location.replace("https://api.thingspeak.com/update.json?api_key=<Y6LO9XZPZB02XSSW>&field2=1")
	//   }
	// function initChart() {
	// 	getInitialData();
	// 	// load new data every 15 seconds
	// 	setInterval('getInitialData()', 1000);
	// 	}

	document.getElementById('btn1').addEventListener('click', function () {
		document.getElementById("switch_status").innerHTML = 'Switched on.';
		url = 'https://api.thingspeak.com/update.json?api_key=GR6OYFO8CDTYCWUJ&field2=1';

	})
	document.getElementById('btn0').addEventListener('click', function () {
		document.getElementById("switch_status").innerHTML = 'Switched off.';
		url = 'https://api.thingspeak.com/update.json?api_key=GR6OYFO8CDTYCWUJ&field2=0';

	})

	// async function handleSearch() {
	// 	if (searchBar.value) {
	// 		const location = searchBar.value;
	// 		searchBar.value = '';
	// 		const data = await getData(location);
	// 		if (data) displayData(data);
	// 	}
	// }

	// changes icon according to the weather
	// function changeIcon(data) {
	// 	switch (data) {
	// 		case 'NaN':
	// 			// document.body.style.backgroundImage = 'url("clear.jpg")';
	// 			conditionIcon.className = 'fas fa-cloud-showers-heavy';
	// 			break;
	// 		case 'Rain':
	// 			conditionIcon.className = 'fas fa-cloud-showers-heavy';
	// 			break;
	// 		case 'Clouds':
	// 			conditionIcon.className = 'fas fa-cloud';
	// 			break;
	// 		case 'Drizzle':
	// 			conditionIcon.className = 'fas fa-cloud-rain';
	// 			break;
	// 		case 'Thunderstorm':
	// 			conditionIcon.className = 'fas fa-cloud-showers-heavy';
	// 			break;
	// 		case 'Snow':
	// 			conditionIcon.className = 'fas fa-snowflake';
	// 			break;
	// 		case 'Haze':
	// 			conditionIcon.className = 'fas fa-smog';
	// 	}
	// }

	function removeAnimation() {
		[weatherLeft, weatherRight].forEach((weather) => {
			weather.addEventListener('animationend', () => {
				weather.classList.remove('fade');
			});
		});

		line.addEventListener('animationend', () => {
			line.classList.remove('elongate');
		});
	}

	// makes the animation re-occur whenever a new location is searched
	function reAnimate() {
		weatherLeft.classList.add('fade');
		weatherRight.classList.add('fade');
		line.classList.add('elongate');
	}

	// function handleKeyboard(e) {
	// 	if (document.activeElement === searchBar) {
	// 		if (e.key === 'Enter' && searchBar.value) {
	// 			searchButton.click();
	// 		}
	// 	}
	// }
})();
