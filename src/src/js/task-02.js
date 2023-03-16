// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.createElement("ul");
// console.log(listEl);
for (const ingredient of ingredients) {
  // console.log(ingredient);
  const liEl = document.createElement("li");
  // console.log(liEl);
  liEl.textContent = ingredient;
  // console.log(ingredient);
  listEl.appendChild(liEl);
}
// console.log(listEl);
document.body.appendChild(listEl);
