const hex = ["A", "B", "C", "D", "E", "F",0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
  let newColor = "#";
  for (let i = 0; i < 6; i++) {
    newColor += hex[getRandomNumber()];
  }
  color.textContent = newColor;
  document.body.style.backgroundColor = newColor;
});

