// console.log(randomNumber);
const userInput = document.querySelector(".form-input");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const allGuesses = document.querySelector(".all-guesses");
const submitBtn = document.querySelector(".btn-primary");
const newGameBtn = document.querySelector(".btn-secondary");

function a() {
  let randomNumber = Math.round(Math.random() * 100);
  const allGuessesArray = [];
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if (userInputValue < randomNumber) {
      result.innerText = `${userInputValue} is Too Low! `;
    } else if (userInputValue > randomNumber) {
      result.innerText = `${userInputValue} is Too High! `;
    } else {
      result.innerText = "Congrats🎉 Your guess is correct";
      newGameBtn.disabled = false;
      submitBtn.disabled = true;
    }
    allGuessesArray.push(userInputValue);
    allGuesses.innerText = allGuessesArray.join(", ");
    form.reset();
  });

  newGameBtn.addEventListener("click", () => {
    allGuesses.innerText = "";
    result.innerText = "";
    newGameBtn.disabled = true;
    submitBtn.disabled = false;
    randomNumber = Math.round(Math.random() * 100);
  });
}

a();
