// const pinOne_div = document.getElementById("pinOne");
const pinOne_div = document.querySelector(".pinOne");
const pinTwo_div = document.querySelector(".pinTwo");
const pinThree_div = document.querySelector(".pinThree");


const nightMode_div = document.querySelector(".backgroundPic");
const nightModeLetters = document.querySelector(".flex-container");
const exploreLetters = document.querySelector(".explore");
const menuLetters = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
const logoNight = document.querySelector(".menu-toggle");

const nightMode_li = document.getElementById("night");


function main(){

   pinOne_div.addEventListener('click', () => {
       pinOne_div.classList.toggle('active');
   })


   pinTwo_div.addEventListener('click', () => {
        pinTwo_div.classList.toggle('active');
    })
 

    pinThree_div.addEventListener('click', () => {
        console.log("Hello");
        pinThree_div.classList.toggle('active');
    })

    nightMode_li.addEventListener('click', () =>{
        nightMode_div.classList.toggle('active');
        nightModeLetters.classList.toggle('active');
        contactButton.classList.toggle('active');
        logoNight.classList.toggle('active');
        menuLetters.classList.toggle('active');
        exploreLetters.classList.toggle('active');

    })



}

main();

