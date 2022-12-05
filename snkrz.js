const flashSale = document.getElementsByClassName('flash')
const newYears = '31 December 2022'
const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minsEl = document.getElementById('min')
const secEl = document.getElementById('sec')

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60)
    console.log(days, hours, mins, seconds)
    dayEl.innerHTML = formatTime(days)
    hourEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secEl.innerHTML = formatTime(seconds)
}

countdown()
setInterval(countdown, 1000);

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}