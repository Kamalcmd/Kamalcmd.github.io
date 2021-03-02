
<<<<<<< HEAD



//window.alert("This website is under constructions");
=======
window.alert("This website is under constructions");
>>>>>>> a9d46468bad044b294c689d76576fb43ccfe3df3
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
<<<<<<< HEAD

var modalBtn = document.querySelectorAll('.modal-btn');
var modal = document.querySelectorAll('.modal-content');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
    modal.classList.add('modal-active');
});

modalClose.addEventListener('click', function(){
    modal.classList.remove('modal-active');
});











=======
>>>>>>> a9d46468bad044b294c689d76576fb43ccfe3df3
