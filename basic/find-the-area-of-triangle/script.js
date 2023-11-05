// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// let side1 = Number(prompt("nhap vao canh a"));
// let side2 = Number(prompt("nhap vao canh b"));
// let side3 = Number(prompt("nhap vao canh c"));
do {
  var side1 = Number(prompt("nhap vao canh a"));
  var side2 = Number(prompt("nhap vao canh b"));
  var side3 = Number(prompt("nhap vao canh c"));
} while (
  side1 * side1 + side2 * side2 < side3 * side3 ||
  side3 * side3 + side2 * side2 < side1 * side1 ||
  side1 * side1 + side3 * side3 < side2 * side2
);

let s = (side1 + side2 + side3) / 2;
var areaTriange = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

let areaTriangeHTml = document.querySelector(".areaTriange");

if (areaTriangeHTml) {
  areaTriangeHTml.innerHTML = `dien tich tam giac la : ${areaTriange}`;
}
