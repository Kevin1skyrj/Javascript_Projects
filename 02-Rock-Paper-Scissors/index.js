const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const userHandIcon = document.querySelector('.user.hand-icon');
const computerHandIcon = document.querySelector('.computer.hand-icon');
const result = document.querySelector('.result');
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');

const rockIcon = "✊";
const paperIcon = "🤚";
const scissorsIcon = "✌️";


const iconList = [rockIcon,paperIcon,scissorsIcon];

rockBtn.addEventListener("click",function(){
    result.innerText = '';
    userHandIcon.classList.add('shakeUserHands');
    computerHandIcon.classList.add('shakeComputerHands');
    setTimeout(() => {
    userHandIcon.classList.remove('shakeUserHands');
    computerHandIcon.classList.remove('shakeComputerHands'); 
    userHandIcon.innerText = rockIcon; 
    const computerChoice = Math.floor(Math.random()*3);
    console.log(computerChoice);
    computerHandIcon.innerText = iconList[computerChoice];
    if(userHandIcon.innerText === computerHandIcon.innerText){
        result.innerText = 'Draw!'
    }else if(computerHandIcon.innerText === scissorsIcon){
        result.innerText = 'You Won!'
        userScore.innerText = +userScore.innerText + 1;
    }else{
        result.innerText = 'Computer Won!'
        computerScore.innerText = +computerScore.innerText + 1;
    }
    },500)
})
paperBtn.addEventListener("click",function(){
    result.innerText = '';
    userHandIcon.classList.add('shakeUserHands');
    computerHandIcon.classList.add('shakeComputerHands');
    setTimeout(() => {
    userHandIcon.classList.remove('shakeUserHands');
    computerHandIcon.classList.remove('shakeComputerHands');  
    userHandIcon.innerText = paperIcon;
    const computerChoice = Math.floor(Math.random()*3);
    computerHandIcon.innerText = iconList[computerChoice];
    if(userHandIcon.innerText === computerHandIcon.innerText){
        result.innerText = 'Draw!'
    }else if(computerHandIcon.innerText === rockIcon){
        result.innerText = 'You Won!'
        userScore.innerText = +userScore.innerText + 1;
    }else{
        result.innerText = 'Computer Won!'
        computerScore.innerText = +computerScore.innerText + 1; 
    }
    },500)
})
scissorsBtn.addEventListener("click",function(){
    result.innerText = '';
    userHandIcon.classList.add('shakeUserHands');
    computerHandIcon.classList.add('shakeComputerHands');
    setTimeout(() => {
    userHandIcon.classList.remove('shakeUserHands');
    computerHandIcon.classList.remove('shakeComputerHands'); 
    userHandIcon.innerText = scissorsIcon; 
    const computerChoice = Math.floor(Math.random()*3);
    computerHandIcon.innerText = iconList[computerChoice];
    if(userHandIcon.innerText === computerHandIcon.innerText){
        result.innerText = 'Draw!'
    }else if(computerHandIcon.innerText === paperIcon){
        result.innerText = 'You Won!'
        userScore.innerText = +userScore.innerText + 1; 
    }else{
        result.innerText = 'Computer Won!'
        computerScore.innerText = +computerScore.innerText + 1;
    }
    },500)
})