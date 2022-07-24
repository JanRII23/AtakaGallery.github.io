
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





function main1(){
    // backgroundModuleMain.backgroundChangePublic();
    const flex_container2First_div = document.querySelector(".flex-container2First");
    flex_container2First_div.classList.toggle("active");
};

main1();