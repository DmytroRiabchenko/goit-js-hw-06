// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = document.querySelector("#value");
// console.log(counterValue);

const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);

let counter = 0;

decrementBtn.addEventListener("click", () => {
  counter -= 1;
  counterValue.textContent = counter;
  //   console.log("Click");
});

incrementBtn.addEventListener("click", () => {
  counter += 1;
  counterValue.textContent = counter;
  //   console.log("Click");
});
