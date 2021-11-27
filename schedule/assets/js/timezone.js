
let Timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(Timezone)

const str10 = new Date("NOV 27, 2021, 10:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str11 = new Date("NOV 27, 2021, 11:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str12 = new Date("NOV 27, 2021, 12:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str13 = new Date("NOV 27, 2021, 13:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str16 = new Date("NOV 27, 2021, 16:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str17 = new Date("NOV 27, 2021, 17:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str18 = new Date("NOV 27, 2021, 18:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str28_10 = new Date("NOV 28, 2021, 10:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str28_11 = new Date("NOV 28, 2021, 11:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str28_16 = new Date("NOV 28, 2021, 16:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str28_16_30 = new Date("NOV 28, 2021, 16:30:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str28_17 = new Date("NOV 28, 2021, 17:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str28_17_30 = new Date("NOV 28, 2021, 17:30:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );
const str28_18 = new Date("NOV 28, 2021, 18:00:00").toLocaleString('en-US', {timeZone: Timezone, timeStyle: "short", hourCycle: "h24" } );



document.getElementById("27-10").innerHTML = str10
document.getElementById("27-11").innerHTML = str11
document.getElementById("27-12").innerHTML = str12
document.getElementById("27-13").innerHTML = str13
document.getElementById("27-16").innerHTML = str16
document.getElementById("27-17").innerHTML = str17
document.getElementById("27-18").innerHTML = str18
document.getElementById("28-10").innerHTML = str28_10
document.getElementById("28-11").innerHTML = str28_11
document.getElementById("28-16").innerHTML = str28_16
document.getElementById("28-16:30").innerHTML = str28_16_30
document.getElementById("28-17").innerHTML = str28_17
document.getElementById("28-17:30").innerHTML = str28_17_30
document.getElementById("28-18").innerHTML = str28_18