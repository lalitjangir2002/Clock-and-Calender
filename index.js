const month = document.querySelector(".month")
const day = document.querySelector(".day")
const date = document.querySelector(".date")
const year = document.querySelector(".year")
const hourHand = document.querySelector(".hour-hand")
const minHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".second-hand")

let currentDate = new Date()

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

month.innerHTML = months[currentDate.getMonth()]
day.innerHTML = days[currentDate.getDay()]
date.innerHTML = currentDate.getDate();
year.innerHTML = currentDate.getFullYear()

const setDate = ()=>{
    let currenttime = new Date();

    let hour = currenttime.getHours()
    // console.log(hour)
    let hoursDegree = (hour/12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

    let minute = currenttime.getMinutes()
    // console.log(minute)
    let minuteDegree = (minute/60) * 360 + 90;
    minHand.style.transform = `rotate(${minuteDegree}deg)`

    let second = currenttime.getSeconds()
    // console.log(second)
    let secondsDegree = (second/60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
}
setInterval(setDate, 1000)
setDate()