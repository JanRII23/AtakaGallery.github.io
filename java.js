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

let spotLight_div = document.querySelector(".spotlight");

const nightMode_li = document.getElementById("night");


function moveSpotlight(){ //check to see if spotlights goes away when switching off night also what is happening is that im querying .spotlight not spotlight active"
    
    let spotLightActive = document.querySelector(".spotlight.active");

    window.addEventListener('mousemove', function(e){
        let percentageX = e.pageX / window.innerWidth * 100;
        let percentageY = e.pageY / window.innerHeight * 100;

        spotLightActive.style.backgroundIMage = `radial-gradient(circle at ${percentageX}% ${percentageY}%, transparent 80px, rgba(0,0,0,0.45) 140px`
        
    })
    console.log("Hello");

    
}

function main(){

//    pinOne_div.addEventListener('click', () => {
//        pinOne_div.classList.toggle('active');
       
//    })


//    pinTwo_div.addEventListener('click', () => {
//         pinTwo_div.classList.toggle('active');
//     })
 

//     pinThree_div.addEventListener('click', () => {
//         pinThree_div.classList.toggle('active');
//     })

    nightMode_li.addEventListener('click', () =>{
        nightMode_div.classList.toggle('active');
        nightModeLetters.classList.toggle('active');
        contactButton.classList.toggle('active');
        logoNight.classList.toggle('active');
        menuLetters.classList.toggle('active');
        exploreLetters.classList.toggle('active');
        spotLight_div.classList.toggle('active');
    })

 

}

main();

moveSpotlight();

