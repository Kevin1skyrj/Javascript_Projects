const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')

const counterValue = document.getElementById('counter-value');

let count = 0;
//increment 
increment.addEventListener('click' , function(){
    count++;
    counterValue.textContent = count;
    console.log(count)
})
//decrement
decrement.addEventListener('click' , function(){
    count--;
    counterValue.textContent = count;
    console.log(count)
})

console.log(count);