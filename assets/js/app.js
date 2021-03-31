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
const modalBtn1 = document.getElementById('modal-btn-work');
const modal1 = document.getElementById('modal-contact');
const modalClose1 = document.querySelector('.modal-close');
// console.log(modalBtn);

modalBtn1.addEventListener('click', (event) => {
    event.preventDefault();
    modal1.classList.add('modal-active');
});


modalClose1.addEventListener('click', () => {
        modal1.classList.remove('modal-active');
    });



function validation(){
   const name = document.getElementById("name").value;
   const subject = document.getElementById("subject").value;
   const phone = document.getElementById("phone").value;
   const email = document.getElementById("email").value;
   const message = document.getElementById("message").value;
   const error_message = document.getElementById("error_message"); 
   let text;


   error_message.style.padding="10px";

   if(name.length <5){
       text = "Please Enter Valid Name";
       error_message.innerHTML = text;
       return false;
   }

   if(subject.length <10){
    text = "Please Enter Valid Subject more the 10 Character";
    error_message.innerHTML = text;
    return false;
}
if(isNaN(phone)|| phone.length != 10){
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML = text;
    return false;
}

if(email.indexOf("@")== -1 || email.length <6){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
}
if(message.length <=140){
    text = "Please Enter More than 140 Character ";
    error_message.innerHTML = text;
    return false;
}
alert("Form submited Successfully");
   return true;
}
