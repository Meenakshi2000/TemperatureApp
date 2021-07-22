// (function WeatherApp() {
// 	const searchBar = document.querySelector('.search-bar');
// 	const searchButton = document.querySelector('.search-button');
// 	const region = document.querySelector('.location');
// 	const condition = document.querySelector('.condition').querySelector('span');
// 	const temperature = document
// 		.querySelector('.temperature')
// 		.querySelector('span');
// 	const wind = document.querySelector('.wind').querySelector('span');
// 	const feelsLike = document
// 		.querySelector('.feels-like')
// 		.querySelector('.fl-value');
// 	const humidity = document.querySelector('.humidity').querySelector('span');
// 	const pressure = document.querySelector('.pressure').querySelector('span');
// 	const conditionIcon = document.querySelector('.condition').querySelector('i');
// 	const weatherLeft = document.querySelector('.weather-left');
// 	const weatherRight = document.querySelector('.weather-right');
// 	const line = document.querySelector('.line');

// 	init();

// 	function init() {
// 		removeAnimation();

// 		// event listening
// 		window.addEventListener('DDOMContentLoaded', getInitialData());
// 		searchButton.addEventListener('click', handleSearch);
// 		window.addEventListener('keydown', handleKeyboard);
// 	}

// 	// this function gets the weather data of the location of the user when the website first loads
// 	async function getInitialData() {
// 		if (navigator.geolocation) {
// 			navigator.geolocation.getCurrentPosition(async (position) => {
// 				const long = position.coords.longitude;
// 				const lat = position.coords.latitude;
// 				const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=34fbec596ce6ee0a4ef569154cebd76e&units=metric`;
// 				const response = await fetch(url, { mode: 'cors' });
// 				const data = await response.json();
// 				displayData(data);
// 			});
// 		} else {
// 			const data = await getData('Dhaka');
// 			displayData(data);
// 		}
// 	}

// 	async function getData(location) {
// 		try {
// 			const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=34fbec596ce6ee0a4ef569154cebd76e&units=metric`;
// 			const initialResponse = await fetch(url, { mode: 'cors' });
// 			if (!initialResponse.ok) {
// 				throw new Error('');
// 			} else {
// 				const response = await initialResponse.json();
// 				return response;
// 			}
// 		} catch (error) {
// 			console.clear();
// 			alert('Cannot find location');
// 		}
// 	}

// 	function displayData(data) {
// 		reAnimate();
// 		region.textContent = data.name;
// 		condition.textContent = data.weather[0].main;
// 		temperature.textContent = String(Math.round(Number(data.main.temp)));
// 		wind.textContent = `${data.wind.speed} m/s`;
// 		feelsLike.textContent = String(Math.round(Number(data.main.feels_like)));
// 		humidity.textContent = `${data.main.humidity}%`;
// 		pressure.textContent = `${data.main.pressure} hPa`;
// 		changeIcon(data.weather[0].main);
// 	}

// 	async function handleSearch() {
// 		if (searchBar.value) {
// 			const location = searchBar.value;
// 			searchBar.value = '';
// 			const data = await getData(location);
// 			if (data) displayData(data);
// 		}
// 	}

// 	// changes icon according to the weather
// 	function changeIcon(data) {
// 		switch (data) {
// 			case 'Clear':
// 				conditionIcon.className = 'far fa-sun';
// 				break;
// 			case 'Rain':
// 				conditionIcon.className = 'fas fa-cloud-showers-heavy';
// 				break;
// 			case 'Clouds':
// 				conditionIcon.className = 'fas fa-cloud';
// 				break;
// 			case 'Drizzle':
// 				conditionIcon.className = 'fas fa-cloud-rain';
// 				break;
// 			case 'Thunderstorm':
// 				conditionIcon.className = 'fas fa-cloud-showers-heavy';
// 				break;
// 			case 'Snow':
// 				conditionIcon.className = 'fas fa-snowflake';
// 				break;
// 			case 'Haze':
// 				conditionIcon.className = 'fas fa-smog';
// 		}
// 	}

// 	function removeAnimation() {
// 		[weatherLeft, weatherRight].forEach((weather) => {
// 			weather.addEventListener('animationend', () => {
// 				weather.classList.remove('fade');
// 			});
// 		});

// 		line.addEventListener('animationend', () => {
// 			line.classList.remove('elongate');
// 		});
// 	}

// 	// makes the animation re-occur whenever a new location is searched
// 	function reAnimate() {
// 		weatherLeft.classList.add('fade');
// 		weatherRight.classList.add('fade');
// 		line.classList.add('elongate');
// 	}

// 	function handleKeyboard(e) {
// 		if (document.activeElement === searchBar) {
// 			if (e.key === 'Enter' && searchBar.value) {
// 				searchButton.click();
// 			}
// 		}
// 	}
// })();
