let seconds = 00;
let minutes = 00;
let hours = 00;

let secondsElement = document.getElementById("seconds");
let minutesElement = document.getElementById("minutes");
let hoursElement = document.getElementById("hours");
changeTimer(seconds,minutes,hours);


var timer = null;

function play() {

    timer = setInterval(()=>{
        
        if(seconds < 60){
            seconds++;
        }else {
            if(minutes < 60){
                minutes++;
                seconds = 0;
            }else {
                hours++;
                minutes = 0;
                seconds = 0;
            }
        }
        
        changeTimer(seconds,minutes,hours);
    
},1000)}

function pause() {
    clearInterval(timer);
}

function restart() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    changeTimer(seconds,minutes,hours);
    clearInterval(timer);
}

function changeTimer(seconds,minutes,hours) {
    secondsElement.innerHTML = seconds;
    minutesElement.innerHTML = minutes;
    hoursElement.innerHTML = hours;
}