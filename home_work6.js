// 1. Створіть одновимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи довільний цикл.
let arr1 = [1,2,3,4,5,6,7,8]
console.log(arr1)
for(const item of arr1){
  console.log(item)
}


// 2. Створіть одновимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкту в консоль.
// *Виведіть кожний ключ і його значення в консоль.
let obj1 = {
  id: 1,
  type: 'test object',
  name: 'obj1',
  purpose: 'to be printed',
  alive: false,
  willBeUsedAgain: false,
  originCountry: 'Ukraine'
}
console.log(obj1)

for(const item in obj1){
  console.log(item, ': ', obj1[item])
}


// 3. Створіть масив і видаліть останнє значення з масиву, викoристовуючи "pop"
// *Виведіть в консоль нову довжину масиву
let arr2 = [1, 2, 3, 4, 5, '6', '7', 8, 9, '10']
arr2.pop()
console.log(arr2.length)

// 4. Створіть масив і додайте нове значення до масиву з кінця, викoристовуючи "push"
// *Виведіть в консоль нову довжину масиву
let arr3 = ['a', 'b', 'c']
console.log(arr3.push('d'))

// 5. Створіть масив і видаліть перше значення з масиву, викoристовуючи "shift"
// *Виведіть в консоль нову довжину масиву
let arr4 = ['to be deleted', 'a', 'b', 'c']
arr4.shift()
console.log(arr4.length)

// 6. Створіть масив і додайте нове значення до масиву з початку, викoристовуючи "unshift"
// *Виведіть в консоль нову довжину масиву
let arr5 = [1,2,3,4,5,6,7,8]
console.log(arr5.unshift(0))

// 7. Створіть рекурсивну функцію для того, щоб вивести в консоль всі значення багатовимірного масиву

const printAllItemsInMultiDimensionalArray = function(inputArray){
  for(const item of inputArray){
    if(Array.isArray(item)){
      printAllItemsInMultiDimensionalArray(item)
    } else console.log(item)
  }
}


// 8. Створіть рекурсивну функцію для того, щоб вивести в консоль всі ключі багатовимірного обєкту

const printAllKeysInObject = function(inputObject, mode){
  for(const item in inputObject){
    if (mode == 'keysOnly') {
      console.log(item)
    } else if (mode === 'withValues'){
      console.log(item, ':', inputObject[item])
    }
    if(typeof inputObject[item] === 'object'){
      printAllKeysInObject(inputObject[item])
    }
  }
}

// 9. Створіть багатовимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи функцію з завдання 7.
let testArr = [1,2,3,[4,5,6, ['x', 'y', 'z', ['x15', 'y15']]], 'a', 'b', 'c', 10 , 13]
console.log(testArr)
printAllItemsInMultiDimensionalArray(testArr)

// 10. Створіть багатовимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкт в консоль.
// *Виведіть кожний ключ і його значення в консоль використовуючи функцію з завдання 8.

let testObj = {
  id: 2,
  type: 'test object',
  name: 'obj2',
  purpose: 'to be printed',
  alive: false,
  willBeUsedAgain: false,
  sex: 'male',
  origin: {
    planet: 'Earth',
    country: 'Ukraine',
    city: 'Uzhorod'
  },
  realatievs: {
    children: 'none',
    brother: {
      id: 3,
      type: 'test object',
      name: 'obj3',
      purpose: 'to be printed',
      alive: false,
      willBeUsedAgain: true,
      sex: 'male',
      origin: {
        planet: 'Earth',
        country: 'Ukraine',
        city: 'IvanoFrankivsk'
      }
  },
    sister: {
      id: 4,
      type: 'test object',
      name: 'obj4',
      purpose: 'to be printed',
      alive: false,
      willBeUsedAgain: true,
      sex: 'female',
      origin: {
        planet: 'Earth',
        country: 'Ukraine',
        city: 'Kharkiv'
      }
    }
  }
}

console.log(testObj)

printAllKeysInObject(testObj, 'withValues')