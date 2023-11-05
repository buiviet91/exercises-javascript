let buttonPrint = document.querySelector(".print-page");
buttonPrint.addEventListener("click", print_current_page);
function print_current_page() {
  window.print();
}
