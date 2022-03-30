//set initial count;
let counter = 0;

//select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

//logic
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains("decrease")) {
      counter--;
    } else if (btnClass.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      value.style.color = "green";
    } else if (counter < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "rgb(182, 194, 196)";
    }
    value.textContent = counter;
  });
});
