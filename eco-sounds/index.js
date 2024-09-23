const logo = document.querySelector('.logo');
const menuItem = document.querySelectorAll('.nav-item');
const backgroundImg = document.querySelector ('.player');
const playandpause = document.querySelector('.playpause');
let isPlay = false;

//работа с анимацией меню

const toggleActiveClass = (element) => {
    element.classList.toggle('active');
    console.log(element);
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
    console.log (event);
    const element = event.target;
    console.log(element);
    if (element.classList.contains('logo')&&!element.classList.contains('active')){
        toggleActiveClass (element);
        for (let leng of menuItem){
            removeActiveMenuClass (leng);
        }
    }
    else if (element.classList.contains('nav-item')&&!element.classList.contains('active')){
        console.log(element);
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

const audioHandler = (event) =>{
    if (!isPlay){
        playAudio();
        isPlay = true;
    } else {
        pauseAudio();
        isPlay = false;
    }
}
playandpause.addEventListener ('click', audioHandler);