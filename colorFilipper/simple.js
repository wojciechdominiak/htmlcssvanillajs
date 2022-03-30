//set array with sample colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//select span and button
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//logic
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//get random number between 0-3
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
