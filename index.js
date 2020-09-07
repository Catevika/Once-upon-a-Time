// ICON + AUDIO MANAGEMENT - ENTER BUTTON CLICK
const audioContainer = document.getElementById('audio-container');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const playPause = document.getElementById('play-pause');

// SOUND MANAGEMENT

const sound = ['ring', 'ring', 'ring'];
let soundIndex = 1;

function loadSound(sound)
{
  audio.src = `./sounds/${sound}.mp3`;
}

loadSound(sound[soundIndex]);

function playSound()
{
  const pauseIsHidden = playPause.querySelector('img.icon-btn-pause').hasAttribute('hidden');

  if (pauseIsHidden) {
    playPause.querySelector('img.icon-btn-pause').removeAttribute('hidden');
    playPause.querySelector('img.icon-btn-arrow').setAttribute('hidden', "");
  }
  audioContainer.classList.add('play');
  audio.play();
}

function pauseSound()
{
  const arrowIsHidden = playPause.querySelector('img.icon-btn-arrow').hasAttribute('hidden');

  if (arrowIsHidden) {
    playPause.querySelector('img.icon-btn-arrow').removeAttribute('hidden');
    playPause.querySelector('img.icon-btn-pause').setAttribute('hidden', "");
  }

  audioContainer.classList.remove('play');
  audio.pause();
}

// Next image
function nextSound()
{
  soundIndex++;
  if (soundIndex > sound.length - 1) {
    soundIndex = 0;
  }
  loadSound(sound[soundIndex]);
  playSound();
}

playBtn.addEventListener('click', () =>
{
  const isPlaying = audioContainer.classList.contains('play');

  if (isPlaying) {
    playBtn.innerHTML = 'Enter';
    pauseSound();
  } else {
    playBtn.innerHTML = 'Exit';
    playSound();
  }
});

audio.addEventListener('ended', nextSound);