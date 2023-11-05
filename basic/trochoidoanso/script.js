// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

let num = Math.ceil(Math.random() * 10);
let gnum = Number(prompt("nhap vao num"));
let message;
message = num === gnum ? "doan dung" : "doan sai";
const messageElement = document.createElement("p");
messageElement.innerHTML = message;
document.body.appendChild(messageElement);
