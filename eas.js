const container=document.querySelector(".container1") 
const bottone=document.querySelector(".button")
const reset=document.querySelector(".reset")


for(let i=0; i<16*16; i++){
const newdiv=document.createElement("div")
newdiv.classList.add("square")
container.appendChild(newdiv)}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;}

const gameDiv = document.querySelectorAll(".square")

gameDiv.forEach((div) => {
div.addEventListener("mouseover", () => {
div.style.backgroundColor = getRandomColor()
    })})

  function numero(){
    let promptz= prompt ("insert a number between 100")
    if(promptz>100 || isNaN(promptz)){
    return alert("this is not a number between 100")
    }
    while (container.firstChild) {
    container.removeChild(container.firstChild)}
    for(let i=0; i<promptz*promptz; i++){
    const newdiv=document.createElement("div")
    newdiv.classList.add("square2")
    newdiv.style.cssText =`
    width: calc(100% / ${promptz});
    height: calc(100% / ${promptz});`
    container.appendChild(newdiv)
    
}


const gameDiv2 = document.querySelectorAll(".square2")

gameDiv2.forEach((div) => {
div.addEventListener("mouseover", () => {
div.style.backgroundColor = getRandomColor()



})})}
function res() {
const palle=document.querySelectorAll(".container1 div")
palle.forEach((div) => {
div.style.backgroundColor = "white"
    });
}

bottone.addEventListener("click",numero)
reset.addEventListener("click",res)