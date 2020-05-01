// 1. Виведіть користувачу попап використовуючи функцію "alert" який містить довільне повідомлення.
alert('This is a random message')

// 2. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let userInput1 = prompt('Type in a random number')
console.log(userInput1)

// 3. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і має дефолтнe значення "13". Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let userInput2 = prompt('Type in a random number', 13)
console.log(userInput2)

// 4. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let userInput3 = confirm('Are you sure?')
console.log(userInput3)

// 5. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if" виведіть в консоль "1" якщо відповідь на питання була позитивна
let userInput4 = confirm('Are you sure?')
console.log(userInput4)
if (userInput4){ 
  console.log('1')
}

// 6. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2"
let userInput5 = prompt('If you are older than 18, type in \'Yes\'')
console.log(userInput5)
if (userInput5 == 'Yes'){ 
  console.log('1')
} else {
  console.log('2')
}

// 7. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2" або "3"
let userInput6 = prompt('For console log 1 type in \'one\', for 2 - \'two\', anything else will be 3')
console.log(userInput4)
if (userInput6 == 'one'){ 
  console.log('1')
} else if(userInput6 == 'two') {
  console.log('2')
} else {
  console.log('3')
}

// 8. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" якщо відповідь на питання була позитивна
let userInput7 = confirm('Are you sure?')
console.log(userInput7)
switch (userInput7){
  case true:
    console.log('1')
    break
}
// 9. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2"
let userInput8 = prompt('Do you choose 1 or 2?')
console.log(userInput8)
switch (userInput8){
  case '1':
    console.log('1')
    break
  case '2':
    console.log('2')
    break
}

// 10. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3"
let userInput9 = prompt('Do you choose 1 or 2 or 3?')
console.log(userInput9)
switch (userInput9){
  case '1':
    console.log('1')
    break
  case '2':
    console.log('2')
    break
  case '3':
    console.log('3')
    break
}

// 11. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3", виконайте те саме за допомогою "if else";
// *Зробіть два різні приклади

// Приклад 1 
let userInput10_1 = prompt('Do you choose 1 or 2 or 3?')
console.log(userInput10_1)
switch (userInput10_1){
  case '1':
    console.log('1')
    break
  case '2':
    console.log('2')
    break
  case '3':
    console.log('3')
    break
}

if(userInput10_1 == '1'){
  console.log('1')
} else if(userInput10_1 == '2'){
  console.log('2')
} else if(userInput10_1 == '3'){
  console.log('3')
}

// Приклад 2 
let userInput10_2 = prompt('What number do you want to see in the console 3 times: 1, 2, or 3?')
console.log(userInput10_2)
switch (userInput10_2){
  case '1':
    console.log('1')
    break
  case '2':
    console.log('2')
    break
  case '3':
    console.log('3')
    break
}

if(userInput10_2 == '1'){
  console.log('1')
} else if(userInput10_2 == '2'){
  console.log('2')
} else if(userInput10_2 == '3'){
  console.log('3')
}
