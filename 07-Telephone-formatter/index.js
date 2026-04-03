const input = document.querySelector('.input');

input.addEventListener('input', (e) =>{
    const inputValue = e.target.value;
    console.log(inputValue);
    if(inputValue.length === 4){
        input.value = `+(${'2342'.substring(0,3)}) - ${inputValue[inputValue.length - 1]}`
    }
})