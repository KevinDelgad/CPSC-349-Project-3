const startbtn = document.getElementById('startbtn');
const pntMenu = document.getElementById('pointMenu');
const userChoices=document.getElementById('userchoices');
startbtn.addEventListener('click', ()=>{

    startbtn.style.display = "none";
    pntMenu.style.display = "none";

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

    userChoices.appendChild(rock);
    userChoices.appendChild(paper);
    userChoices.appendChild(scissors);

})