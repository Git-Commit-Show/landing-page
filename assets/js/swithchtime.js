 //  code for switching time zone automatically
 function getTimeZone(){
    let Timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return Timezone
}


document.querySelector(".timezone-text").innerText ="* Time shown is in "+ getTimeZone() + " Timezone"
document.querySelectorAll(".duration").forEach((data , index)=>{
date = data.getAttribute("data-date");
let time = new Date(date)
let x  = document.querySelectorAll(".speakers-time")
x[index].innerHTML = time.toLocaleString("en-US", {timeZone: getTimeZone(), timeStyle: "short", hourCycle: "h24"})
})