const sec = document.querySelector(".sec")
const min = document.querySelector(".min")
const hour = document.querySelector(".hour")

function getTime() {
    const date = new Date()
    let second = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()

    sec.style.transform = `rotate(${180 + (second * 6)}deg)`
    min.style.transform = `rotate(${180 + (minutes * 6)}deg)`
    hour.style.transform = `rotate(${180 + (hours * 30)}deg)`
    
}

setInterval(() => {
    getTime()
}, 1000);