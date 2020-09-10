// ICON + AUDIO MANAGEMENT - ENTER BUTTON CLICK
const mainContainer = document.getElementById('main-container');
const enterContainer = document.getElementById('enter-container');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const playPause = document.getElementById('play-pause');

// SOUND MANAGEMENT
const sounds = ['ring', 'ring', 'ring'];
let soundIndex = 1;
let sound = sounds[soundIndex];

function loadSound(sound) {
	audio.src = `./sounds/${sound}.mp3`;
}

loadSound(sound);

function playSound() {
	const pauseIsHidden = playPause
		.querySelector('img.icon-btn-pause')
		.hasAttribute('hidden');

	if (pauseIsHidden) {
		playPause.querySelector('img.icon-btn-pause').removeAttribute('hidden');
		playPause.querySelector('img.icon-btn-arrow').setAttribute('hidden', '');
	}
	mainContainer.classList.add('play');
	audio.play();
}

function pauseSound() {
	const arrowIsHidden = playPause
		.querySelector('img.icon-btn-arrow')
		.hasAttribute('hidden');

	if (arrowIsHidden) {
		playPause.querySelector('img.icon-btn-arrow').removeAttribute('hidden');
		playPause.querySelector('img.icon-btn-pause').setAttribute('hidden', '');
	}

	mainContainer.classList.remove('play');
	audio.pause();
}

// Next image
function nextSound() {
	soundIndex++;
	if (soundIndex > sounds.length - 1) {
		soundIndex = 0;
	}
	loadSound(sound);
	playSound();
}

enterContainer.addEventListener('click', () => {
	const isPlaying = mainContainer.classList.contains('play');

	if (isPlaying) {
		playBtn.innerHTML = 'Enter';
		pauseSound();
	} else {
		playBtn.innerHTML = 'Exit';
		playSound();
	}
});

audio.addEventListener('ended', nextSound);

// SCROLL TO TOP MANAGEMENT
const upArrowContainer = document.getElementById('about-us');
const backToTopBtn = document.getElementById('up-arrow');

// When the user scrolls down 50px from the top of the document, show the button
window.addEventListener('scroll', () => {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		upArrowContainer.querySelector('img.up-arrow').removeAttribute('hidden');
	} else {
		upArrowContainer.querySelector('img.up-arrow').setAttribute('hidden', '');
	}
});

backToTopBtn.addEventListener('click', () => {
	// When the user clicks on the button, scroll to the top of the document
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	upArrowContainer.querySelector('img.up-arrow').setAttribute('hidden', '');
});
