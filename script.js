/**
 * @author Andreea-Daniela Borodi
 */
//let timer=timerLeft;
let timerLeft=60;
let paused = false;
const timer = document.getElementById("timer");
function start(){
   while(timerLeft!=0){
setInterval( document.getElementById("timer").textContent = '00:'+ timerLeft,1000);
timerLeft--;
}
}

//alert("Take a break");