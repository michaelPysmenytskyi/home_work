//1 Створіть об'єкт Person який буде містити імя, прізвище і метод для виводу повного імені і просто імені за допомогою трьох різних варіантів
let person = {
  firstName: 'Michael',
  lastName: 'Pymsenytskiy',
  getFirstName: function(){
    console.log(this.firstName)
    return this.firstName
  },
  getLastName: function(){
    console.log(this.lastName)
    return this.lastName
  },
  getFullName: function(){
    console.log(`${this.firstName} ${this.lastName}`)
    return this.firstName + '' + this.lastName 
  }
}
person.getFirstName()
person.getLastName()
person.getFullName()

//2 Просто функції
function Person1(){
  this.firstName = 'Michael'
  this.lastName = 'Pymsenytskiy'
  this.getFirstName = function(){
    console.log(this.firstName)
    return this.firstName
  }
  this.getLastName = function(){
    console.log(this.lastName)
    return this.lastName
  }
  this.getFullName = function(){
    console.log(`${this.firstName} ${this.lastName}`)
    return this.firstName + '' + this.lastName 
  }
}
let person1_1 = new Person1()
person1_1.getFirstName()
person1_1.getLastName()
person1_1.getFullName()


//3 Функції конструктору
function person2(){
  const obj = {}
  obj.firstName = 'Michael'
  obj.lastName = 'Pymsenytskiy'
  obj.getFirstName = function(){
    console.log(obj.firstName)
    return obj.firstName
  }
  obj.getLastName = function(){
    console.log(obj.lastName)
    return obj.lastName
  }
  obj.getFullName = function(){
    console.log(`${obj.firstName} ${obj.lastName}`)
    return obj.firstName + '' + obj.lastName 
  }
  return obj
}
let person2_1 = person2()
person2_1.getFirstName()
person2_1.getLastName()
person2_1.getFullName()


//4 Класу
class Person3 {
  constructor(){
    this.firstName = 'Michael'
    this.lastName = 'Pymsenytskiy'
  }
  getFirstName = function(){
    console.log(this.firstName)
    return this.firstName
  }
  getLastName = function(){
    console.log(this.lastName)
    return this.lastName
  }
  getFullName = function(){
    console.log(`${this.firstName} ${this.lastName}`)
    return this.firstName + '' + this.lastName 
  }
}
let person3 = new Person3()
person3.getFirstName()
person3.getLastName()
person3.getFullName()