const input = document.querySelector("#controls input");
const createButton = document.querySelector("#controls button[data-create]");
const destroyButton = document.querySelector("#controls button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", create);
destroyButton.addEventListener("click", destroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let width = 30;
let height = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

    const color = getRandomHexColor();

    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = color;
    boxesContainer.append(box);
    width = width + 10;
    height = height + 10;
  }
}

function create() {
  const amount = input.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
}

function destroy() {
  boxesContainer.innerHTML = "";
}
