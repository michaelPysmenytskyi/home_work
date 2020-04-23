// 1) Оголосіть три різні змінні за допомогою "let", "const", "var"
let first
const second
var third

// 2) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення
let changable
const unchgable

// 3) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки
// 1 коментар в 1 рядок
/*Коментар
на
4
рядки*/

// 4) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу String.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let random = 'random'
console.log(typeof random)

// 5) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Number.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let random2 = 123
console.log(typeof random2)

// 6) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Boolean.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let random3 = true
console.log(typeof random3)

// 7) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Object яке буде містити хоча б 3 ключі.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let random4 = {
  key1: false,
  key2: null,
  key3: true
}
console.log(typeof random4)

// 8) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Array яке буде містити хоча б 3 значення.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let random5 = [1,2,3]
console.log(typeof random5)

// 9) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Function.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let random6 = () =>{}
console.log(typeof random6)

// 10) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Undefined.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let random7
console.log(typeof random7)

// 11) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Null.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"
let random8 = null
console.log(typeof random8)

// 12) Оголосіть змінну user типу Object і опишіть своє: ім'я, фамілію, дату народження,
// місце проживання, стать і можете добавити ще додаткові параметри використовуючи різні типи даних.
let user = {
  firstName: 'Michael',
  lastName: 'Pysmenytskyi',
  dateOfBirth: new Date(1991, 6, 25),
  adress: 'Uzhorod city, Zankoveckoi st, 77/26',
  sex: 'male',
  politicalViews: undefined
}
