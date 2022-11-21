const startbtn = document.getElementById('startbtn');
const pntMenu = document.getElementById('pointMenu');
const userChoices=document.getElementById('userchoices');
const cNav = document.getElementById('centralNav');

const resetbtn = document.createElement('button');
resetbtn.textContent = "Reset";
resetbtn.classList.add("btn");
resetbtn.classList.add("btn-primary");
resetbtn.style.display = "none";
cNav.appendChild(resetbtn);

let userpnts = 0;
let cpupnts = 0;
let targetpnts = 0;

const userPoints = document.createElement('p')

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.classList.add("btn");
rock.classList.add("btn-primary");

const paper = document.createElement('button');
paper.textContent = "Paper";
paper.classList.add("btn");
paper.classList.add("btn-primary");

const scissors = document.createElement('button');
scissors.textContent = "Scissors";
scissors.classList.add("btn");
scissors.classList.add("btn-primary");

scissors.style.display = "none";
rock.style.display = "none";
paper.style.display = "none";

userChoices.appendChild(rock);
userChoices.appendChild(paper);
userChoices.appendChild(scissors);

startbtn.addEventListener('click', ()=>{
    startbtn.style.display = "none";
    pntMenu.style.display = "none";

    scissors.style.display = "block";
    rock.style.display = "block";
    paper.style.display = "block";
    resetbtn.style.display = "block"
})

scissors.addEventListener('click', ()=>{
    console.log("S!");   
})

paper.addEventListener('click', ()=>{
    console.log("P!");   
})

rock.addEventListener('click', ()=>{
    console.log("R!");   
})

resetbtn.addEventListener('click', reset);

function reset(){
    userpnts = 0;
    cpupnts = 0;

    startbtn.style.display = "block";
    pntMenu.style.display = "block";

    scissors.style.display = "none";
    rock.style.display = "none";
    paper.style.display = "none";
    resetbtn.style.display = "none";
}