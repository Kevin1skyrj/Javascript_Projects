const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastType = document.querySelector("#toast-type");
const toastMessage = document.querySelector("#toast-message");
const durationContainer = document.querySelector("#duration-container");
const showToastBtn = document.querySelector(".show-toast");
const toastContainer = document.querySelector(".toasts-container");

showToastBtn.addEventListener("click", () => {
  const newToast = document.createElement('div');
  newToast.classList.add('toast');

  if (horizontalPosition.value === "right") {
    toastContainer.classList.add("right");
  } else {
    toastContainer.classList.remove("right");
  }
  if (verticalPosition.value === "bottom") {
    toastContainer.classList.add("bottom");
  } else {
    toastContainer.classList.remove("bottom");
  }
});
