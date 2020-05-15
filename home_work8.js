// 1. Створіть дві змінні типу стрінг і виведіть їх в консоль разом, використовуючи конкатинацію стрiнги.
let string1_1 = 'abcdefg'
let string1_2 = 'hijklomnp'
console.log(`${string1}${string2}`)

// 2. Створіть змінну типу стрінг і виведіть в консоль її довжину.
let string2 = '9999aaaaa9999vvvvvv00000'
console.log(string2.length)

// 3. Створіть змінну типу стрінг і виведіть в консоль перший символ стрінги.
let string3 = 'asdfjsdflasdhf32i3r23r'
console.log(string3[0])

// 4. Створіть змінну типу стрінг і виведіть в консоль останній символ, довільної стрінги.
let string4 = 'asdfsdogijqo3i4t023tj;lfkajsdfA'
console.log(string4[string4.length-1])

// 5. Створіть змінну типу стрінг і приведіть змінну до верхнього регістру.
let string6 = 'dafdsfakjsdfhlsdjfhsdf'
string6 = string6.toUpperCase()
console.log(string6)

// 6. Створіть змінну типу стрінг і приведіть змінну до нижнього регістру.
let string7 = 'WEDASDLFKASJDFsdlfjslkdfjSLAKFJSDLFKJSDaksjls'
string7 = string7.toLowerCase()
console.log(string7)

// 7. Створіть змінну і присвойте в неї дату вашого народження.
let myBirthday = new Date('1991-07-25')

// 8. Виведіть рік вашого народження (Використовуючи змінну з 7 завдання).
console.log(myBirthday.getFullYear())

// 9. Виведіть місяць вашого народження (Використовуючи змінну з 7 завдання).
console.log(myBirthday.getMonth())

// 10. Виведіть день вашого народження (Використовуючи змінну з 7 завдання).
console.log(myBirthday.getDate())

// 11. Виведіть в консоль рік місяць день вашого народження через тире (-) (Використовуючи змінну з 7 завдання).
console.log(`${myBirthday.getFullYear()}-${myBirthday.getMonth()}-${myBirthday.getDate()}`)

// 12. Створіть нову дату яка має 14 годину і 23 хвилини.
let time12 = new Date(2018,2,3,14,23)
console.log(`${time12.getHours()}:${time12.getMinutes()}`)

// 13. Порівняйте дві дати між собою і результат виведіть в консоль.
console.log(myBirthday < time12)