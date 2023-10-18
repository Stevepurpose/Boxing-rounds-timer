var input=document.getElementById("round")
var p=document.getElementById ("readit")
var Btnclick=document.getElementById ("Btnclick")
var button=document.getElementById("btn")

var audio1 = new Audio("https://dl.dropbox.com/s/2ks6ti7z74lng9n/box%20project%20done_202205081836003.mp3?dl=0")
audio1.muted = true
btn.addEventListener("click",clicked)
function clicked(){
readit.innerHTML ="Round" + input.value + "fight"

var i = 1;      
//count 1 to 180 which is 3 minutes per round
//create a loop function

function myLoop() {         
setTimeout(function() { // call a 1s setTimeout when the loop is called
readit.innerHTML = (i) +":" + "0" +0
i++;                   
if (i < 180) {           
  myLoop();             
}  
if(i>59){
readit.innerHTML= 1 +":" + "0"+(i-60)
}   
if(i>69){
    
readit.innerHTML = 1 + ":" +(i-60)
}

if(i>119){
    readit.innerHTML=2 + ":" + 0 +(i-120)
}   
if(i>129){
    readit.innerHTML =2 +":" +(i-120)
}
if(i>179){
    readit.innerHTML=3 +":" +"0" +(i-180)
}
         
}, 1000)
}
myLoop () //function call

audio1.muted=true

//Bell for beginning of rounds
function play(){
audio1.muted = false
audio1.play()
}
$timer=setTimeout(play,1)


 //asynchronous callback
   function displayMessage(){
       readit.innerHTML="REST TIME"
       //bell for end of rounds
   }
 let count=setTimeout(displayMessage,180000)  
   
    

let TimeoutId=setTimeout(showMessage,170000) 
function showMessage() {
  readit.innerHTML=10 + "minutes to go"
}
     }
   
//button to clear up after each round
var button=document.getElementById ("Btnclick")
document.getElementById("Btnclick").addEventListener("click",clearP) 
function clearP () {
input.value=""
}











