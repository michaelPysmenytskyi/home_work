// 1. Створіть обєкт та масив
// * Використовуйте обєкт і масив створені в першому заданні у всіх наступних завданнях
let testArr = []
let testObj = {}

// 2. Додайте до обєкту ключ "birthdate" типу Date
testObj.birthdate = new Date('1991-06-25')

// 3. Додайте новий елемент в кінець масиву
testArr.push('новий елемент')

// 4. Видаліть з обєкту доданий ключ у завданні 3
delete testObj.birthdate

// 5. Видаліть елемент з масиву доданий у завданні 4
testArr.pop(0)

// 6. Додайте до обєкту метод який буде виводити ваше імя і прізвище.
testObj.myName = function(){
  console.log('Michael Pysmenytskiy') 
}

// 7. Створіть конструктор який буде відтворювати функціонал який є наявний в обєкті
class MyName{
  constructor() {
    this.birthdate = new Date('1991-06-25')  
  }
  myName = function(){
    console.log('Michael Pysmenytskiy') 
  }
}
let test1 = new MyName()
test1.myName()

// 8. Створіть новий конструктор який буде унаслідувати функціонал конструктору з попереднього звдання і буде мати додатковий метод для виводу дати народження.
class Child extends MyName{
  dateOfBirth = function () {
    console.log(this.birthdate)
  }
}

// 9. Створіть новий eлемент за допомогою конструктору з попереднього завдання і виведіть імя та прізвище або дату народження.
let test2 = new Child()
test2.dateOfBirth()
test2.myName()