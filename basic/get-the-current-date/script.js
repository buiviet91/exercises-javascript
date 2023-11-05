// write a Javascipt program to get the current date
let today = new Date();
let date = today.getDate();
let butonGetCurrentDate = document.querySelector(".get-current-date");
let displayCurrentDate = document.querySelector(".displayCurrentDate");
if (butonGetCurrentDate) {
  butonGetCurrentDate.addEventListener("click", function () {
    displayCurrentDate.innerHTML = `today is : ${date} `;
  });
}
