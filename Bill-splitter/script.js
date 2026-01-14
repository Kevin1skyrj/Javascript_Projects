const tipContainer = document.querySelector('.tip-container');
const billAmount = document.getElementById('bill-amount');
const customTip = document.querySelector('.custom-tip');
const numberOfPeople = document.querySelector('.number-of-people');
const generateBill = document.querySelector('.generate-bill-btn');


billAmount.addEventListener('input', () =>{
  console.log('You are typing')
})

tipContainer.addEventListener('click', () => {
   console.log("clicked")
})

customTip.addEventListener('input',() =>{
    console.log('custom type')
})

numberOfPeople.addEventListener('input',() =>{
    console.log('People typing')
})

generateBill.addEventListener('click',() =>{
    console.log('GenerateBill clicked')
})