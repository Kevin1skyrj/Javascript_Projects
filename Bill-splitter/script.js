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
    const tipAmount = billAmount * (tipAmount/100);
    const totalAmount = billAmount + tipAmount;
    const eachPersonBill = totalAmount / numberOfPeople;

    tipAmountOutput.innerTextContent =  `₹${tipAmount}`;
    toalAmountOutput.innerTextContent =  `₹${totalAmount}`;
    eachPersonBillOutput.innerTextContent =  `₹${eachPersonBill}`;
    console.log('GenerateBill clicked')
})
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

