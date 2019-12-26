const body = document.body;
const endTime = new Date('January 25 2020 11:00:59');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


setInterval(updateCountdown, 1000)
setInterval(createHeartFalls, 50);


function updateCountdown() {
	const startTime = new Date();
	const diff = endTime - startTime;
	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
	minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
	secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}

function createHeartFalls() {
	const heart_falls = document.createElement('i');
	heart_falls.classList.add('fas');
	heart_falls.classList.add('fa-heart');
	heart_falls.style.left = Math.random() * window.innerWidth + 'px';
	heart_falls.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	heart_falls.style.opacity = Math.random();
	heart_falls.style.fontSize = Math.random() * 10 + 10 + 'px';
	
	document.body.appendChild(heart_falls);
	
	setTimeout(() => {
		heart_falls.remove();
	}, 5000)
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});