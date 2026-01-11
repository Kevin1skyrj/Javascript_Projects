// You are developing a simple banking application and need to implement a function to calculate the interest earned on a savings account balance. Implement a JavaScript function named calculateInterest that takes two parameters: balance and rate. The balance parameter represents the current balance in the savings account, and the rate parameter represents the annual interest rate (in decimal form).

function calculateInterest(balance,rate){
    let interest = balance*rate;
    return interest;
}


console.log(calculateInterest(1000,0.05));