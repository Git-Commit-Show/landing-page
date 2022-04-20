 //  code for switching time zone automatically
 function getTimeZone(){
    let Timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return Timezone
}


function updateClock(){
    // create a  date object with current date and time.
    let date = new Date();

    // obtain a string of time in hh:mm:ss format
    let timeString  = date.toTimeString().slice(0,8); 

    
    document.querySelector(".timezone-text").innerText = "* The time is " + timeString  +" in "+ getTimeZone() + " Timezone " 
    
    // update the clock after every 1000ms equivalent to 1 second
    setTimeout(updateClock, 1000)    
}
updateClock();

document.querySelectorAll(".duration").forEach((data , index)=>{
date = data.getAttribute("data-date");
let time = new Date(date)
let x  = document.querySelectorAll(".speakers-time")
x[index].innerHTML = time.toLocaleString("en-US", {timeZone: getTimeZone(), timeStyle: "short", hourCycle: "h24"})
});
