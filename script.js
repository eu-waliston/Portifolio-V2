const bilist = document.querySelector(".bi-list");
const navbarItens = document.querySelector('.navbar__itens');
const navbar = document.querySelector(".nav");

function toggleMenu(e) {
    e.preventDefault();
    navbarItens.classList.toggle("navbar__itens__resp");
    navbar.classList.toggle("nav__resp");
}

bilist.addEventListener('click', toggleMenu);
