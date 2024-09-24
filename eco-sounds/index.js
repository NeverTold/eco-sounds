const audioPlayer = document.querySelector ('.player');
const playerImg = document.querySelector ('.thumbunals');
const play = document.querySelector('.play');
const next = document.querySelector('.nextsong');
const prev = document.querySelector('.prevsong');
const duration = document.querySelector('.duration-time');
const progressBar = document.getElementById('songtime')
const currentSongTime = document.querySelector('.current-time');
const artistName = document.querySelector ('.artist');
const songName = document.querySelector('.song');
const songs = ['assets/audio/beyonce.mp3', 'assets/audio/dontstartnow.mp3'];
const thumbunals = ['assets/img/lemonade.png', 'assets/img/dontstartnow.png'];
const artist = ['Beyonce','Dua Lipa'];
const song = ["Don't Hurt Yourself", "Don't Start Now"];
let isPlay = false;
let playNum = 0;

const audio = new Audio();

function playAudio() {
    if (playNum <0) {
        playNum = songs.length -1;
    } else if (playNum >= songs.length) {
        playNum = 0;
    }
    audio.src = songs[playNum];
    audio.currentTime = 0;
    audio.play(); 
    document.body.style.background = 'url('+ thumbunals[playNum]+')';
    playerImg.src = thumbunals[playNum];
    artistName.textContent = artist[playNum];
    songName.textContent = song[playNum];
}

function pauseAudio() {
    audio.pause();
  }

function playNext() {
    playNum +=1;
    playAudio(playNum);
}

function playPrev(){
    playNum -=1;
    playAudio(playNum);
}

const togglePauseClass = (element) => {
    element.classList.toggle('pause')
}
  
const audioHandler = (event) =>{
    const element = event.target;
    if (!isPlay){
        playAudio();
        isPlay = true;
        togglePauseClass(element);
    } else {
        pauseAudio();
        isPlay = false;
        togglePauseClass(element);
    }
}

play.addEventListener ('click', audioHandler);
next.addEventListener ('click', playNext);
prev.addEventListener ('click', playPrev);

// загрузка продолжительности песни
audio.addEventListener(
    "loadeddata",
    () => {
      audioPlayer.querySelector(".duration-time").textContent = getTimeCodeFromNum(
        audio.duration
      );
      progressBar.max = audio.duration;
    },
    false
  );
// каждые пол секунды обнавление времени песни и прогресс бара
  setInterval(() => {
    progressBar.value = audio.currentTime;
    currentSongTime.textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 500);
// представление изначальной длины песни в секундах в формате часы:минуты:секунды с проверкой на наличие часов
  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }
  