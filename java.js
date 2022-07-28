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


// const backgroundModuleMain = (function(){
//     'use strict'
//     const flex_container2First_div = document.querySelector(".flex-container2First");
//     const flex_container2Second_div = document.querySelector(".flex-container2Second");
    

//     function backgroundChange(){
//         window.addEventListener('click', () =>{
//             flex_container2First_div.classList.toggle('active');
            
//             console.log('money');
//         })
//     };

//     return{
//         backgroundChangePublic: function(){
//             backgroundChange();
            
//         }
//     };

// }) ();


// function main1(){
//     // backgroundModuleMain.backgroundChangePublic();
//     const flex_container2First_div = document.querySelector(".flex-container2First");
//     flex_container2First_div.classList.toggle("active");
// };

// main1(); this changes background color when scrolling up above

let click = false;


const removeMp4_Module = (function(){

    'use strict';
    const mediaQuery = window.matchMedia('(min-width: 1001px)');
    const backgroundVideoLanding_tag = document.querySelector(".backgroundVideo");
    const unityVideoLogo_tag = document.querySelector(".unityVideo_real");

    
    
    

    function Load(){
        if (mediaQuery.matches){
            backgroundVideoLanding_tag.src = './images/backgroundsmaller_video.mp4';
            backgroundVideoLanding_tag.muted = true;
            backgroundVideoLanding_tag.loop = true;
            backgroundVideoLanding_tag.autoplay = true;
            unityVideoLogo_tag.src = './unityProject/theDelivererAssets/Unity2.0.mp4';
            unityVideoLogo_tag.muted = true;
            unityVideoLogo_tag.loop = true;
            unityVideoLogo_tag.autoplay = true;
            // Note that if I were to remove the video tag instead it still get loaded by webpage
        }
    };

    return{
        LoadPublic: function(){
            Load();
        }
    }


}) ();

const unityPlay_Module = (function(){

    'use strict';

    const unityVideo_div = document.querySelector(".unityVideo");
    const stopVideo_button = document.querySelector(".stopVideo");
    const flexContainer2First_div = document.querySelector(".flex-container2First");
    const flexContainer2Second_div = document.querySelector(".flex-container2Second");
    


    // good thing about this is that once that user views it doesnt play animation

    function stopVideo(){
        stopVideo_button.addEventListener('click', () => {
            unityVideo_div.classList.toggle('stopPlay');
            flexContainer2First_div.classList.toggle('active');
            flexContainer2Second_div.classList.toggle('active');
            // flexContainer2_id.classList.toggle('easeBackground');
            document.querySelector(".test1").classList.toggle('active');
            document.querySelector(".test2").classList.toggle('active');
        })

    };

    return {
        stopVideoPublic: function(){
            stopVideo();
        }
    };

}) ();

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

    //unity page
    const flex_container2_id = document.getElementById("flex-container2");
    const unityVideo_div = document.querySelector(".unityVideo");
    const flexContainer2First_div = document.querySelector(".flex-container2First");
    const flexContainer2Second_div = document.querySelector(".flex-container2Second");

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
            unityVideo_div.classList.toggle('active');
            flex_container2_id.classList.toggle('active');
            flexContainer2First_div.classList.toggle('night');
            flexContainer2Second_div.classList.toggle('night');
            
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
    unityPlay_Module.stopVideoPublic(); 
    removeMp4_Module.LoadPublic();

    document.querySelector("body").addEventListener('click', ()=>{
        click = !click; //this is a neat trick
       
    })


    


};

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
