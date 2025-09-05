//1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
let friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let result = "";

for (let i = 0; i < friends.length; i++) {
  result += friends[i];
  if (i < friends.length - 1) {
    result += ", ";
  }
}

console.log(result);
//👉 Спочатку через for




let friends2 = ["Mango", "Poly", "Kiwi", "Ajax"];
const result2 = friends2.join(", ");
console.log(result2);
//👉 Потім через join()






// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const carts = [
    'карточка 1',
    'карточка 2',
    'карточка 3',
    'карточка 4',
    'карточка 5'
]
carts.splice(2, 1);
console.log(carts);
//3. Видалити

carts.splice(4, 0, 'карточка 6');
console.log(carts);
//4. Додати

carts.splice(2, 1, "карточка 3");
console.log(carts);
//5. Оновити (правильно?)