// Массив данных
let array = [5, 8, 54, 21, 7, 1, 14, 48, 43, 25, 6, 100];

// Вариант 1
let uneven = [];
for (let elem of array) {
  if (elem % 2 !== 0) {
    uneven.push(elem);
  }
}
const sortAscending = (a, b) => a - b;
uneven.sort(sortAscending);
console.log(uneven);

// Вариант 2
let even = [];
for (let elem of array) {
  if (elem % 2 == 0) {
    even.push(elem);
  }
}
even.reverse();
console.log(even);

// Вариант 3
even.sort(sortAscending);

const sortDescending = (a, b) => b - a;
uneven.sort(sortDescending);

let mix = even.concat(uneven);
console.log(mix);


