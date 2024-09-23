const logo = document.querySelector('.logo');
const menuItem = document.querySelectorAll('.nav-item');

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