let inputYear = Number(prompt("nhập năm để kiểm tra"));
let message = "";
// cách 1
// if (inputYear % 4 === 0 && inputYear % 100 !== 0) {
//   message = `${inputYear} là năm nhuận`;
// } else {
//   if (inputYear % 100 === 0 && inputYear % 400 === 0) {
//     message = `${inputYear} là năm nhuận`;
//   } else {
//     message = `${inputYear} không là năm nhuận`;
//   }
// }
// cách 2
let flag = inputYear % 100 === 0 ? inputYear % 400 === 0 : inputYear % 4 === 0;
message = flag
  ? `${inputYear} là năm nhuận`
  : (message = `${inputYear} không là năm nhuận`);
const messagerElemnt = document.createElement("h2");
messagerElemnt.innerText = message;
document.body.appendChild(messagerElemnt);
