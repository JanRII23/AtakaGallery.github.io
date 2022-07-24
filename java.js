// const main = document.querySelector(".container");
// const scrollEvent = () => {
    
//     const section2 = document.querySelector("#sect2");
//     const section3 = document.querySelector("#sect3");

//     if (main.scrollTop > 500){
//         section2.style.backgroundColor = "red";
        
//     }
//     else{
//         section2.style.backgroundColor = "black";

//     }

//     if (main.scrollTop > window.innerHeight / 2){
//         section3.style.backgroundColor = "blue";
//     }else{
//         section3.style.backgroundColor = "purple";
//     }
// } remember that main keyword already exists!!

// main.addEventListener('scroll', scrollEvent);



let click = false;

const nightMode_SpotLightModule = (function(){
    'use strict';
    const nightMode_div = document.querySelector(".backgroundPic");
    const nightModeLetters = document.querySelector(".flex-container");
    const exploreLetters = document.querySelector(".explore");
    const menuLetters = document.querySelector(".menu");
    const contactButton = document.querySelector(".contact");
    const logoNight = document.querySelector(".menu-toggle");

    let spotLight_div = document.querySelector(".spotlight");
   
    const nightMode_li = document.getElementById("night");

    function moveSpotlight(){ 
    
        window.addEventListener('mousemove', e => {
            let percentageX = e.pageX / window.innerWidth * 100;
            let percentageY = e.pageY / window.innerHeight * 100;
    
            if(click == true){
            spotLight_div.style.backgroundImage = `radial-gradient(circle at ${percentageX}% ${percentageY}%, transparent 80px, rgba(0,0,0,0.20) 110px`
            }
    
        })
    };

    function nightMode(){

        nightMode_li.addEventListener('click', () =>{
            nightMode_div.classList.toggle('active');
            nightModeLetters.classList.toggle('active');
            contactButton.classList.toggle('active');
            logoNight.classList.toggle('active');
            menuLetters.classList.toggle('active');
            exploreLetters.classList.toggle('active');
            spotLight_div.classList.toggle('active');
            
        })
    };

    return{
        moveSpotlightPublic: function(){
            moveSpotlight();
        },
        nightModePublic: function(){
            nightMode();
        }
    };
    
}) ();

function main(){

    nightMode_SpotLightModule.nightModePublic();
    nightMode_SpotLightModule.moveSpotlightPublic();

    document.querySelector("body").addEventListener('click', ()=>{
        click = !click; //this is a neat trick
       
    })


    


}
 //test main1
main();


//for the pins later

// const pinOne_div = document.querySelector(".pinOne");
// const pinTwo_div = document.querySelector(".pinTwo");
// const pinThree_div = document.querySelector(".pinThree");

//    pinOne_div.addEventListener('click', () => {
//        pinOne_div.classList.toggle('active');
//    })
//    pinTwo_div.addEventListener('click', () => {
//         pinTwo_div.classList.toggle('active');
//     })
//     pinThree_div.addEventListener('click', () => {
//         pinThree_div.classList.toggle('active');
//     })
