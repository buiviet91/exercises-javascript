function multiplyBY() {
  let number1 = document.getElementById("firstNumber").value;
  let number2 = document.getElementById("secondNumber").value;
  document.querySelector(".result").innerHTML =
    Number(number1) * Number(number2);
}
function divideBY() {
  let number1 = document.getElementById("firstNumber").value;
  let number2 = document.getElementById("secondNumber").value;
  document.querySelector(".result").innerHTML =
    Number(number1) / Number(number2);
}
