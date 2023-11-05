//  Write a JavaScript program to display the current day and time in the following format
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
let today = new Date("October 13, 2014 0:010:00");
let day = today.getDay();
let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}
if (hour === 0 && prepand === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}
let todayHtml = document.querySelector("#today");
let currenTimeHtml = document.querySelector(".current-time");
todayHtml.innerHTML = `Today is: ${dayList[day]}`;
currenTimeHtml.innerHTML = `Current Time:${hour} ${prepand} : ${minute} : ${second}`;
