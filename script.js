 let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let greet = document.getElementById("greeting");


setInterval(()=>{
   let currentTime = new Date();

hrs.innerHTML= (currentTime.getHours()<10?"0":"") +currentTime.getHours();
min.innerHTML= (currentTime.getMinutes()<10?'0':"") + currentTime.getMinutes();
sec.innerHTML=( currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

//greet logic 

if (hrs >=5 && hrs <12){
    greet.innerHTML = "Good Morning!"
}
else if (hrs >12 && hrs >17){
    greet.innerHTML = "Good Afternoon!"
}
else if (hrs >=17 && hrs <20){
    greet.innerHTML = "Good Evening!"
}
else{
    greet.innerHTML = "Good Night!"
}

},1000);



