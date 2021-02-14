const body = document.querySelector("body")
const clock = document.getElementById("clock")
const color = document.getElementById("color")


function showTime() {
    let date = new Date()
    let sec = date.getSeconds()
    let min = date.getMinutes()
    let hour = date.getHours()
    let amPm = checkTime(hour)

    changeColor(addZero(hour), addZero(min), addZero(sec))
    clock.textContent = `${converTime(addZero(hour))}:${addZero(min)}:${addZero(sec)} ${amPm}`
}

function checkTime(hour) {
    if (hour >= 12) {
        return "PM"
    }
    else {
        return "AM"
    }
}

function converTime(hour) {
    if (hour > 12) {
        hour -= 12
    }
    return hour
}

function addZero(time) {
    if (time < 10) {
        time = "0" + time
    }
    return time
}

function changeColor(hour, min, sec) {
    let colorValue = `#${hour}${min}${sec}`
    color.textContent = colorValue
    body.style.backgroundColor = colorValue
}

setInterval(() => {
    showTime()
}, 1000);