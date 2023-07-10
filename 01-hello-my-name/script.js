//ref to greet btn
const greetBtn = document.querySelector("#greet-btn");
const nameInput = document.querySelector("#name-input");
const greetMsg = document.querySelector("#greet-msg");
console.log(nameInput);

greetBtn.onclick = () => {
  if (nameInput.value === "") {
    greetMsg.innerText = "Please insert your name.";
    greetMsg.classList.add("text-danger");
  } else {
    greetMsg.innerText = "Hello " + nameInput.value + "!";
    greetMsg.classList.remove("text-danger");
  }
};
