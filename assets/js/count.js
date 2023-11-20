//countdown timer
var second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

var countDown = new Date('Jan 27, 2024 10:00:00').getTime(),
x = setInterval(function() {
  var now = new Date().getTime(),
  distance = countDown - now;
  if(distance > 0){
    var daysElement = document.getElementById('days'),
      hoursElement = document.getElementById('hours'),
      minutesElement = document.getElementById('minutes'),
      secondsElement = document.getElementById('seconds');
  
    if(daysElement) daysElement.innerText = Math.floor(distance / (day));
    if(hoursElement) hoursElement.innerText = Math.floor((distance % (day)) / (hour));
    if(minutesElement) minutesElement.innerText = Math.floor((distance % (hour)) / (minute));
    if(secondsElement) secondsElement.innerText = Math.floor((distance % (minute)) / second);
  }
}, second)
