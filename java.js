const pinOne_div = document.getElementById("pinOne");


function main(){

   pinOne_div.addEventListener('click', () => {
       console.log("Hello");
       pinOne_div.classList.toggle('visited');
   })
    

}

main();

