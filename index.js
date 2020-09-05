// AUDIO MANAGEMENT - ENTER BUTTON CLICK
const audioContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const audio = document.getElementById('audio');

// Phone rings
const sound = ['ring', 'ring', 'ring'];

// Keep track of sound
let soundIndex = 1;

// Initially load sound into DOM
loadSound(sound[soundIndex]);

// Update song details
function loadSound(sound)
{
  audio.src = `./sounds/${sound}.mp3`;
}

// Play sound
function playSound()
{
  audioContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause sound
function pauseSound()
{
  audioContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Next sound
function nextSound()
{
  soundIndex++;

  if (soundIndex > sound.length - 1) {
    soundIndex = 0;
  }
  loadSound(sound[soundIndex]);
  playSound();
}

// Event listeners
playBtn.addEventListener('click', () =>
{
  const isPlaying = audioContainer.classList.contains('play');

  if (isPlaying) {
    pauseSound();
  } else {
    playSound();
  }
});

// Sound ends
audio.addEventListener('ended', nextSound);
