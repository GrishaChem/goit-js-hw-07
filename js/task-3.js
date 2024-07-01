const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", handleInput);
function handleInput(event) {
  const value = event.currentTarget.value.trim();
  console.log(value);
  output.textContent = value;
  if (value === "") {
    output.innerHTML = "Anonymous";
  }
}
