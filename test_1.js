// 1) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення
let first
const second

// 2) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки
// 1 коментар в 1 рядок
/*Коментар
на
4
рядки*/

// 3) Створіть "масив" який буде містити 5 довільних значень.
let testArr = [1,2,3,4,5]
console.log(testArr)// * Виведіть змінну в консоль за допомогою "console.log"
delete testArr[0]
delete testArr[testArr.length-1]// * Видаліть з масиву перше і останнє значення.
console.log(testArr)// * Виведіть змінну в консоль за допомогою "console.log"

// 4) Створіть "об'єкт" який буде містити 5 довільних ключів із довільними значеннями.
let testObj = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
}
console.log(testObj) // * Виведіть змінну в консоль за допомогою "console.log"
delete testObj.first
delete testObj.fifth// * Видаліть з об'єкту перший і останній ключ
console.log(testObj)// * Виведіть змінну в консоль за допомогою "console.log"

// 5) Напишіть всі способи створення функції.

function option1(){}
let option2 = function(){}
let option3 = new Funciton()
let option4 = () =>{}
(function(){}) 

// 6) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
function sumOfThre(arg1, arg2, arg3){
 return arg1 + arg2 + arg3 
}
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.
let testVar1 = 3, testVar2 = 23, testVar3 = 435
console.log(sumOfThre(23, 123, 44))
console.log(sumOfThre(testVar1, testVar2, testVar3))

// 7) За допомогою тернарного оператору присвойте значення у змінну "salary" використовуючи змінну "workType". Якщо workType дорівнює "fulltime", тоді значення змінної має бути "1000" інакше "500".
// * Виведіть "salary" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "1000" в іншому "500"
let workType = 'fulltime'
let salary = (workType === 'fulltime')?'1000':'500'
console.log(salary)
workType = 'parttime'
salary = (workType === 'fulltime')?'1000':'500'
console.log(salary)

// 8) Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
let userInput = prompt('Press 1 or 2')
// * Виведіть змінну в консоль за допомогою "console.log"
console.log(userInput)
// * Використовуючи "switch" виведіть в консоль "a" або "b" або "c", виконайте те саме за допомогою "if else";
switch (userInput){
  case '1':
    console.log('a')
    break
  case '2':
    console.log('b')
    break
  default:
    console.log('c')
    break
}

if(userInput == '1'){
  console.log('a')
} else if(userInput == '2'){
  console.log('b')
} else {
  console.log('c')
}

// * Зробіть два різні приклади
let userInput2 = prompt('Press 1 or 2')
switch (userInput2){
  case '1':
    console.log('You have pressed 1')
    break
  case '2':
    console.log('You have pressed 2')
    break
  default:
    console.log('You pressed the wrong key')
    break
}

if(userInput2 == '1'){
  console.log('You have pressed 1')
} else if(userInput == '2'){
  console.log('You have pressed 2')
} else {
  console.log('You pressed the wrong key')
}