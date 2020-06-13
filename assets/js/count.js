//countdown timer
var second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

var countDown = new Date('Jun 27, 2020 10:00:00').getTime(),
x = setInterval(function() {

var now = new Date().getTime(),
	distance = countDown - now;

document.getElementById('days').innerText = Math.floor(distance / (day)),
  document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

}, second)

//carousal js code

document.addEventListener('DOMContentLoaded',()=>{
  const expandsMore=document.querySelectorAll('[expand-more]')

  function expand(){
    const showContent=document.getElementById(this.dataset.target)
    if(showContent.classList.contains('expand-active')){
      this.innerHTML=this.dataset.showtext
    }else{
      this.innerHTML=this.dataset.hidetext
    }
    showContent.classList.toggle('expand-active')
  }
  expandsMore.forEach(expandMore => {
    expandMore.addEventListener('click',expand)
  })
})
