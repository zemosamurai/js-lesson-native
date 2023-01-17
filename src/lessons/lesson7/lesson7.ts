console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

// class Animal {
//     constructor(name) {
//         this.name = name || 'Animal'
//     }
//
//     walk() {
//         console.log(`${this.name} walking`)
//     }
//
//     eat() {
//         console.log(`${this.name} eating`)
//     }
//
//     sleep() {
//         console.log(`${this.name} sleeping`)
//     }
// }


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

// class Monkey extends Animal {
//     constructor(name) {
//         super(name || 'Monkey');
//     }
//     roar() {
//         console.log(`${this.name} roaring`)
//     }
//
//     climb() {
//         console.log(`${this.name} climbing`)
//     }
// }



//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

// class Human extends Monkey {
//     constructor(name) {
//         super(name || 'Human');
//     }
//     speak() {
//         console.log(`${this.name} speaking`)
//     }
//
//     think() {
//         console.log(`${this.name} thinking`)
//     }
// }


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

// function Animal(name) {
//     this.name = name || 'Animal'
// }
//
// Animal.prototype.walk = function () {
//     console.log(`${this.name} walking`)
// }
// Animal.prototype.eat = function () {
//     console.log(`${this.name} eating`)
// }
// Animal.prototype.sleep = function () {
//     console.log(`${this.name} sleeping`)
// }
//
//
// function Monkey(name) {
//     this.name = name || 'Monkey'
// }
// Monkey.prototype = Animal.prototype
//
// Monkey.prototype.roar = function () {
//     console.log(`${this.name} roaring`)
// }
// Monkey.prototype.climb = function () {
//     console.log(`${this.name} climbing`)
// }
//
//
//
// function Human(name) {
//     this.name = name || 'Human'
// }
// Human.prototype = Monkey.prototype
//
// Human.prototype.speak = function () {
//     console.log(`${this.name} speaking`)
// }
// Human.prototype.thinking = function () {
//     console.log(`${this.name} thinking`)
// }


// Task 05
// Используя метод Apply реализовать свой собственный метод bind


// just a plug
export default () => {};