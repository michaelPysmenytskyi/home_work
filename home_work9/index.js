// 1. Створіть index.html file and index.js file. Підключіть джс до html.

console.log('// 2. Виведіть в консоль body')
console.log(document.body) 

console.log('// 3. Виведіть в консоль довільний eлемент викoристовуючи getElementById')
console.log(document.getElementById('titleH1'))

console.log('// 4. Виведіть в консоль довільний eлемент викoристовуючи getElementsByClassName')
console.log(document.getElementsByClassName('navigation')[0])

console.log('// 5. Виведіть в консоль довільний eлемент викoристовуючи getElementsByTagName')
console.log(document.getElementsByTagName('ul')[0]) 

// 6. Створіть елементи для взяємодії з користувачем (button and input)

// 7. Напишіть функцію яка буде взяємодіяти з button і буде виводити alert користувачу з довільним текстом 
const button7 = document.getElementById('button7')
button7.onclick = function(){
  alert('Button was clicked!')
}

// 8. Напишіть функцію яка буде взяємодіяти з input і буде виводити в консоль значення яке ввів користувач
const inputText8 = document.getElementById('inputText8')
inputText8.onchange = function(event){
  console.log(event.target.value)
}


// For fun
const forFunButton = document.getElementById('forFunButton')
forFunButton.onmouseover = function(event){
  let offset = event.target.style
  let goX = getRandom()
  let goY = getRandom()

  event.target.style.top = (parseInt(getComputedStyle(event.target).top) + 30 * goY) + 'px'
  event.target.style.left = (parseInt(getComputedStyle(event.target).left) + 30 * goX) + 'px'
}

const getRandom = function(){
  return Math.random() < 0.5 ? -1 : 1;
}