//set array with necessary value for drawing a color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//select span and button
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//logic
btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

//get random number between 0-15
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
