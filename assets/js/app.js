//window.alert("This website is under constructions");
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Togle Nav
        nav.classList.toggle('nav-active');

        //Animation slide links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.7s ease forward ${index / 5 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });

}
navSlide();

const modalBtn = document.getElementById('modal-btn');
const modal = document.getElementById('modal-contact');
const modalClose = document.querySelector('.modal-close');
console.log(modalBtn);

modalBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('modal-active');
});


modalClose.addEventListener('click', () => {
        modal.classList.remove('modal-active');
    });











