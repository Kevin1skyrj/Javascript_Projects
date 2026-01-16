const tipContainer = document.querySelector('.tip-container');
const billAmountInput = document.getElementById('bill-amount');
const customTipInput = document.querySelector('.custom-tip');
const numberOfPeopleInput = document.querySelector('.number-of-people');
const generateBill = document.querySelector('.generate-bill-btn');
const tipAmountOutput = document.querySelector('.tip-amount span');
const toalAmountOutput = document.querySelector('.total span');
const eachPersonBillOutput = document.querySelector('.each-person-bill span');
const reset = document.querySelector('.reset-btn');

let tipPercentage = 0;
generateBill.addEventListener('click',() =>{
    const billAmount = parseInt(billAmountInput.value);
    const numberOfPeople = parseInt(numberOfPeopleInput.value);
    const tipAmount = billAmount * (tipPercentage/100);
    const totalAmount = billAmount + tipAmount;
    const eachPersonBill = totalAmount / numberOfPeople;

    tipAmountOutput.innerText =  `₹${tipAmount}`;
    toalAmountOutput.innerText =  `₹${totalAmount}`;
    eachPersonBillOutput.innerText =  `₹${eachPersonBill}`;
    console.log('GenerateBill clicked')
})
billAmountInput.addEventListener('input', () =>{
  if(billAmountInput.value){
    customTipInput.disabled = false;
    numberOfPeopleInput.disabled = false;
    tipContainer.classList.remove('disabled');
  }
})

tipContainer.addEventListener('click', (e) => {
  if (tipContainer.classList.contains('disabled')) return

  if (e.target !== tipContainer) {
    ;[...tipContainer.children].forEach((tip) =>
      tip.classList.remove('selected')
    )
    e.target.classList.add('selected')
    tipPercentage = parseInt(e.target.innerText)
    customTipInput.value = ''

    if (numberOfPeopleInput.value && tipPercentage) {
      generateBill.disabled = false
    } else {
      generateBill.disabled = true
    }
  }
})

customTipInput.addEventListener('input',() =>{
    console.log('custom type')
})

numberOfPeopleInput.addEventListener('input',() =>{
    if(numberOfPeopleInput && tipPercentage){
        generateBill.disabled = false;
    }else{
        generateBill.disabled = true;
    }
})

