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

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const fragment = document.createDocumentFragment(); // Створюємо фрагмент

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();

    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = color;
    fragment.appendChild(box); // Додаємо блок до фрагмента
    width += 10;
    height += 10;
  }

  boxesContainer.appendChild(fragment); // Додаємо всі блоки до контейнера однією операцією
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
