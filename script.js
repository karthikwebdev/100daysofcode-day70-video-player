const video = document.getElementById('video');
const play = document.getElementById('play');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const forward = document.getElementById("for");
const backward = document.getElementById("back");
// Play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    video.pause();
  }
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

//set 5 seconds back
function goBack(){
     video.currentTime = video.currentTime - 5;
}

//set 5 seconds forward
function goFront(){
    video.currentTime = video.currentTime + 5;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
progress.addEventListener('change', setVideoProgress);
backward.addEventListener("click",goBack);
forward.addEventListener("click",goFront);