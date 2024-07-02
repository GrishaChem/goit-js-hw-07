const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  const info = {
    email: elements.email.value,
    password: elements.email.value,
  };
  console.log(info);
  event.currentTarget.reset();
}
