// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
let message;

for (let i = 2014; i <= 2050; i++) {
  let date = new Date(`${i}-01-01`);
  if (date.getDay() === 0) {
    console.log(i);
  }
}
