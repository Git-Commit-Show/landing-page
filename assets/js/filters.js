var pastTalkDetailsElement = document.querySelector("#past-talk-details")
var masterTalk = document.querySelector("#masterTalk")
var showTalk = document.querySelector("#showTalk")
var careerTalk = document.querySelector("#careerTalk")
var allTalks = document.querySelector("#allTalks")

allTalks.classList.add("badge-dark")

masterTalk.addEventListener("click", ()=>{
    var speakersData = pastTalkDetailsElement.querySelectorAll('.speakers-data-2')
    var speakerClassFilter = masterTalk.getAttribute("data-talk")
    speakersData.forEach(data => {
        var jun27ChildElement = data.parentElement.parentElement;
        jun27ChildElement.style.display = "none"
        if(data.innerText.toLowerCase() === speakerClassFilter.toLowerCase()){
            data.parentElement.parentElement.style.display = "flex"
            masterTalk.classList.add("badge-dark")
            allTalks.classList.remove("badge-dark")
            showTalk.classList.remove("badge-dark")
            careerTalk.classList.remove("badge-dark")
        }
    })
})

showTalk.addEventListener("click", ()=>{
    var speakersData = pastTalkDetailsElement.querySelectorAll('.speakers-data-2')
    var speakerClassFilter = showTalk.getAttribute("data-talk")
    speakersData.forEach(data => {
        var jun27ChildElement = data.parentElement.parentElement;
        jun27ChildElement.style.display = "none"
        if(data.innerText.toLowerCase() === speakerClassFilter.toLowerCase()){
            data.parentElement.parentElement.style.display = "flex"
            masterTalk.classList.remove("badge-dark")
            allTalks.classList.remove("badge-dark")
            showTalk.classList.add("badge-dark")
            careerTalk.classList.remove("badge-dark")
        }
    })
})

careerTalk.addEventListener("click", ()=>{
    var speakersData = pastTalkDetailsElement.querySelectorAll('.speakers-data-2')
    var speakerClassFilter = careerTalk.getAttribute("data-talk")
    speakersData.forEach(data => {
        var jun27ChildElement = data.parentElement.parentElement;
        jun27ChildElement.style.display = "none"
        if(data.innerText.toLowerCase() === speakerClassFilter.toLowerCase()){
            data.parentElement.parentElement.style.display = "flex"
            masterTalk.classList.remove("badge-dark")
            allTalks.classList.remove("badge-dark")
            showTalk.classList.remove("badge-dark")
            careerTalk.classList.add("badge-dark")
        }
    })
})

allTalks.addEventListener("click", ()=>{
    var speakersData = pastTalkDetailsElement.querySelectorAll('.speakers-data-2')
    speakersData.forEach(data => {
        var jun27ChildElement = data.parentElement.parentElement;
        jun27ChildElement.style.display = "flex"
        allTalks.classList.add("badge-dark")
        masterTalk.classList.remove("badge-dark")
        showTalk.classList.remove("badge-dark")
        careerTalk.classList.remove("badge-dark")
    })
})