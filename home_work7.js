// 1. Створіть функцію за допомогою "function expression".
let testObj = {
  arg1: 6,
  arg2: 3
}
const getSum = function(obj, cb) {
  return obj.arg1 + obj.arg2;
};
getSum(testObj)

// 2. Створіть функцію за допомогою "new Function".
const multiply = new Function('obj', 'cb', 'return obj.arg1 * obj.arg2')
multiply(testObj)

// 3. Створіть функцію за допомогою "arrow function".
const devide = (obj, cb) => {return obj.arg1 / obj.arg2}
devide(testObj)

// 4. Створіть функцію яка приймає два аргументи, перший це обєкт другий це колбек.
const someFunction = function(obj, cb){
  return cb(obj)
}
someFunction(testObj, multiply)

// 5. Створіть рекурсивну функцію.
let tempnumber = 9
const buildPyramidWithNumber = function (arg){
  let temp = ''
  for(let i = 0; i < arg; i++){
    temp = temp.concat('*') 
  }
  console.log(temp)
  if (arg) buildPyramidWithNumber(arg-1)
}
buildPyramidWithNumber(tempnumber)

// 6. Створіть самовикликаючусь функцію.
(function(){
console.log('I will be printed without the function being called anywhere else')
})()

// 7. Створіть функцію і виведіть в консоль всі аргументи які були їй передані.
const printAllArguments = function(){
  for(const item of arguments){
    console.log(item)
  }
}
printAllArguments(1,2,3,4,5,'5','6','1234234','sdafdsfa')