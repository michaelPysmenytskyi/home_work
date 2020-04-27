// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar1 = 2
testVar1 = String(testVar1)
console.log(typeof testVar1)

// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar2 = 2
testVar2 = Boolean(testVar2)
console.log(typeof testVar2)

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar3 = 2
testVar3 = null
console.log(typeof testVar3)
// АБО другий варіант
let testVar3_1 = 2

function Null(){
  return null
}

testVar3_1 = Null()
console.log(typeof testVar3_1)

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar4 = 'this is a string'
testVar4 = Number(testVar4)
console.log(typeof testVar4)

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar5 = 'this is a string'
testVar5 = Boolean(testVar5)
console.log(typeof testVar5)

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar6 = 'this is a string'
testVar6 = null
console.log(typeof testVar6)

// АБО другий варіант
let testVar6_1 = 'this is a string'
testVar6_1 = Null()
console.log(typeof testVar6_1)

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar7 = true
testVar7 = String(testVar7)
console.log(typeof testVar7)

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar8 = true
testVar8 = Number(testVar8)
console.log(typeof testVar8)


// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу null використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar9 = true
testVar9 = null
console.log(typeof testVar9)

// АБО другий варіант
let testVar9_1 = true
testVar9_1 = Null()
console.log(typeof testVar9_1)


// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar10 = null
testVar10 = String(testVar10)
console.log(typeof testVar10)

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar11 = null
testVar11 = Number(testVar11)
console.log(typeof testVar11)

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let testVar12 = null
testVar12 = Boolean(testVar12)
console.log(typeof testVar12)

// 13) Напишіть всі способи створення функції.

function option1(){}
let option2 = function(){}
let option3 = new Funciton()
let option4 = () =>{}
(function(){}) //option 5

// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію
function testFunc15(){}
testFunc15()

// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію
function getMichaelsName(){
  return 'Michael'
}

getMichaelsName()

// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
let testVar16 = 5

function returnWithoutChange(arg){
  return arg
}

returnWithoutChange(3)

returnWithoutChange(testVar16)

// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
let testVar17_1 = 4
let testVar17_2 = 5

function getSum(arg1, arg2){
  return arg1 + arg2
}

getSum(3,4)
getSum(testVar17_1, testVar17_2)

// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму вбо із змінними.
let testVar18_1 = 7
let testVar18_2 = 8
let testVar18_3 = 9

function getSum(arg1, arg2, arg3){
  return arg1 + arg2 + arg3
}

getSum(3,4,5)
getSum(testVar18_1, testVar18_2, testVar18_3)
