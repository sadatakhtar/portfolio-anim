



const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

     

    //Toggle the nav
    burger.addEventListener('click' , () =>{
    nav.classList.toggle('nav-active');

    //Animate the links
    navLinks.forEach((link, index) =>{
        if (link.style.animation) {
            link.style.animation = ''
        }else {
            link.style.animation = `navLinkFade 0.9s ease forwards ${index / 7 + 1}s`
        }
    });
   //burger animation
   burger.classList.toggle('toggle');

});







const logo = document.querySelectorAll('#logo  path');
console.log(logo);

for(let i =0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`); 
}

const navSlide = ()=> {
    const burger = document.querySelectorAll('.burger');
    
    

    burger.addEventListener("click" , ()=>{
        console.log("clicked burger!");

    });
}


