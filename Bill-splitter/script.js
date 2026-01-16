const tipContainer = document.querySelector('.tip-container');
const billAmountInput = document.getElementById('bill-amount');
const customTipInput = document.querySelector('.custom-tip');
const numberOfPeopleInput = document.querySelector('.number-of-people');
const generateBill = document.querySelector('.generate-bill-btn');
const tipAmountOutput = document.querySelector('.tip-amount span');
const toalAmountOutput = document.querySelector('.total span');
const eachPersonBill = document.querySelector('.each-person-bill span');
const reset = document.querySelector('.reset-btn');


billAmountInput.addEventListener('input', () =>{
  if(billAmountInput.value){
    customTipInput.disabled = false;
    numberOfPeopleInput.disabled = false;
    tipContainer.classList.remove('disabled');
  }
})

tipContainer.addEventListener('click', () => {
   console.log("clicked")
})

customTipInput.addEventListener('input',() =>{
    console.log('custom type')
})

numberOfPeopleInput.addEventListener('input',() =>{
    console.log('People typing')
})

generateBill.addEventListener('click',() =>{
    
    console.log('GenerateBill clicked')
})