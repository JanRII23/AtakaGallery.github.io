// const pinOne_div = document.getElementById("pinOne");
const pinOne_div = document.querySelector(".pinOne");

const pinTwo_div = document.querySelector(".pinTwo");
const pinThree_div = document.querySelector(".pinThree");


function main(){

   pinOne_div.addEventListener('click', () => {
       console.log("Hello");
       pinOne_div.classList.toggle('active');
   })


   pinTwo_div.addEventListener('click', () => {
        console.log("Hello");
        pinTwo_div.classList.toggle('active');
    })
 

    pinThree_div.addEventListener('click', () => {
        console.log("Hello");
        pinThree_div.classList.toggle('active');
    })
 
    

}

main();

