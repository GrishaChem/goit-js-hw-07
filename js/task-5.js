const body = document.querySelector("body");

const changeColor = document.querySelector(".change-color");
const Color = document.querySelector(".color");

changeColor.addEventListener("click", changecolor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changecolor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  Color.textContent = newColor;
}
