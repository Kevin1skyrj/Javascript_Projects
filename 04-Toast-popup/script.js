const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastType = document.querySelector("#toast-type");
const toastMessage = document.querySelector("#toast-message");
const durationContainer = document.querySelector("#duration-container");
const showToastBtn = document.querySelector(".show-toast");
const toastContainer = document.querySelector(".toast-container");

showToastBtn.addEventListener("click", () => {
  if (horizontalPosition.ariaValueMax === "right") {
    toastContainer.classList.add("right");
  } else {
    // toastContainer.classList.remove("right");
  }
  if (verticalPosition.ariaValueMax === "bottom") {
    toastContainer.classList.add("bottom");
  } else {
    // toastContainer.classList.remove("bottom");
  }
});
