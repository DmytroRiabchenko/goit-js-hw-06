// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const inputEl = document.querySelector("#name-input");
// console.log(inputEl);
// const outputEl = document.querySelector("#name-output");
// console.log(outputEl);

const nameInput = document.querySelector("#name-input");
// console.log(nameInput);
const nameOutput = document.querySelector("#name-output");
// console.log(nameOutput);

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim()
    ? nameInput.value.trim()
    : "Anonymous";
});
