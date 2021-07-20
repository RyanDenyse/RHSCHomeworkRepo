// print the outer HTML of the navigation bar
const navBar = document.querySelector("nav-bar");
console.log("nav bar", navBar.outerHTML);

// print the inner HTML of the navigation bar
console.log("inner html", navBar.innerHTML);

// print the text content of the #class-schedule-list element
const classSchedule = document.querySelector("#class-schedule-list");
console.log(classSchedule.textContent);

// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("wee-1");

// select the img element and add a src attribute

// change the font color of the h1 element
document.querySelector("h1").style.color = "blue"