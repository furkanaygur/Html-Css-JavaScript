const body = document.querySelector("body")
const btn = document.getElementById("btn")
const text = document.getElementById("text")

function createColor(){
    const values = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let result = "#"
    for(let i=0; i<6;i++){
        const rnd = Math.floor(Math.random() * values.length)
        result += values[rnd]
    }
    btn.style.color = "white"
    btn.style.borderColor = "white"
    body.style.backgroundColor = result
    text.textContent = result
}

btn.addEventListener("click", createColor)
