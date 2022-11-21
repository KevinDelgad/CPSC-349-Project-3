const startbtn = document.getElementById('startbtn');
const pntMenu = document.getElementById('pointMenu');
const userChoices=document.getElementById('userchoices');
const cNav = document.getElementById('centralNav');

const continueBtn = document.createElement('button');
continueBtn.textContent = "Continue";
continueBtn.classList.add("btn");
continueBtn.classList.add("btn-primary");
continueBtn.style.display = "none";
cNav.appendChild(continueBtn);


const cpuTurnbtn = document.createElement('button');
cpuTurnbtn.textContent = "CPU turn";
cpuTurnbtn.classList.add("btn");
cpuTurnbtn.classList.add("btn-primary");
cpuTurnbtn.style.display = "none";
cNav.appendChild(cpuTurnbtn);

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

const playerPic = document.getElementById('playerPic');
const compPic = document.getElementById('cpuPic');

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
    playerPic.src = ('images/4VAR8_AS01.jpeg');   
    disableButtons();
})

paper.addEventListener('click', ()=>{
    console.log("P!");   
    playerPic.src = ('images/Notebook-Paper-US-Letter.png');
    disableButtons();
})

rock.addEventListener('click', ()=>{
    console.log("R!");   
    playerPic.src = ('images/1200px-Two-parts_stone_nikogda_takih_ne_videl_vot.jpeg');
    disableButtons();
})

cpuTurnbtn.addEventListener('click', () =>{
    continueBtn.style.display = "block";
    cpuTurnbtn.style.display = "none";

})

continueBtn.addEventListener('click', () => {
    continueBtn.style.display = "none";
    enableButtons();
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
    cpuTurnbtn.style.display = 'none'; 

    playerPic.src = ("images/player.png")
}

function disableButtons(){
    cpuTurnbtn.style.display = "block";

    scissors.disabled = true;
    rock.disabled = true;
    paper.disabled = true;
}

function enableButtons(){
    scissors.disabled = false;
    rock.disabled = false;
    paper.disabled = false;
}