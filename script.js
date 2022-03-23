const burgerMenu = document.getElementsByClassName('burgerMenu')[0];
const links = document.getElementsByClassName('links')[0]; // returns an array, get first element

burgerMenu.addEventListener('click', () => {
    links.classList.toggle('active');// if active class is there, remove it. if not add it. it toggles the class
})

