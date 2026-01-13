const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const userHandIcon = document.querySelector('.user.hand-icon');
const computerHandIcon = document.querySelector('.computer.hand-icon');


rockBtn.addEventListener("click",function(){
    userHandIcon.classList.add('shakeUserHands');
    computerHandIcon.classList.add('shakeComputerHands');
    setTimeout(() => {
    userHandIcon.classList.remove('shakeUserHands');
    computerHandIcon.classList.remove('shakeComputerHands');  
    },500)
})
paperBtn.addEventListener("click",function(){
    userHandIcon.classList.add('shakeUserHands');
    computerHandIcon.classList.add('shakeComputerHands');
    setTimeout(() => {
    userHandIcon.classList.remove('shakeUserHands');
    computerHandIcon.classList.remove('shakeComputerHands');  
    },500)
})
scissorsBtn.addEventListener("click",function(){
    userHandIcon.classList.add('shakeUserHands');
    computerHandIcon.classList.add('shakeComputerHands');
    setTimeout(() => {
    userHandIcon.classList.remove('shakeUserHands');
    computerHandIcon.classList.remove('shakeComputerHands');  
    },500)
})