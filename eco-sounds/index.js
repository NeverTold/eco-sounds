const logo = document.querySelector('.logo');
const menuItem = document.querySelectorAll('.nav-item');
const backgroundImg = document.querySelector ('.player');
const playandpause = document.querySelector('.playpause');
let isPlay = false;

//работа с анимацией меню

const toggleActiveClass = (element) => {
    element.classList.toggle('active');
}
const toggleActiveMenuClass = (element) => {
    element.classList.toggle('active-menu');
}

const removeActiveClass = (element) => {
    element.classList.remove('active');
}

const removeActiveMenuClass = (element) => {
    element.classList.remove('active-menu');
}

const handleClick = (event) => {
    const element = event.target;
    if (element.classList.contains('logo')&&!element.classList.contains('active')){
        toggleActiveClass (element);
        for (let leng of menuItem){
            removeActiveMenuClass (leng);
        }
    }
    else if (element.classList.contains('nav-item')&&!element.classList.contains('active')){
        if (logo.classList.contains('active')){
            removeActiveClass (logo)
        } else for (let len of menuItem){
            removeActiveMenuClass(len)
        }
        toggleActiveMenuClass (element);
        }
};    

logo.addEventListener('click', handleClick);
for (let leng of menuItem) {
    leng.addEventListener ('click', handleClick);
};

//работа с плеером

const audio = new Audio();

function playAudio() {
  audio.src = "assets/audio/forest.mp3";
    audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
    audio.pause();
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
playandpause.addEventListener ('click', audioHandler);