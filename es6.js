//установка babel
// Команды:
// node -v
// npm -v
// npm init -y
// npm install babel-cli babel-core babel-preset-es2015 --save-dev
// npm run build

// Скрипты для package.json:
// "build": "babel src -d dist --presets es2015"
// "watch": "babel src -d dist --presets es2015 -w"

// npm run watch

'use strict'

let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = i;
    buttons[i].onclick = function(event) {
        console.log(i);
    }
}
console.log(buttons);


// const

const PI = 3.14; // задавать значение сразу и не менять значение








//spread operator
// ...

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 5, 6, 7, 8]; // итого 1 массив
let arr3 = [arr1, 'Hi', arr2, 'buy']; // 4 элемента в 2 из которых массивы

console.log(arr2);
console.log(arr3);


//example_1
let sum = 0;

function Sum(x) {
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
};

console.log(Sum(...arr1));


//example_2

function calculate(x, y, z, q) {
    return x + y + z + q;
};

console.log('summ is ' + calculate(...arr1));




//template strings

function createEmail(to, from, subject, message) {
    console.log(`
		To: ${to}
		From: ${from}
		Subject: ${subject}
		Message: ${message}`);
};

createEmail('5344208@gmail.com', '1772211@gmail.com', 'miss you', 'Hi! How are you?!')


function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x)+parseInt(y)}`);
};

add(4, '7');


function hi(name) {
    console.log(`Hello ${name}`.toUpperCase())
};

hi('Bill');



let name = 'Bill!!';
let surname = 'Smith';
console.log(upperName `Hello dear mrs ${name} ${surname}`)


function upperName(literals, ...values) { // перeдается values - массив
    // return literals;
    // return literals[0] + (values.forEach(function(value) { return value.toUpperCase() }));
    // console.log(literals[0]);
    // console.log(values.map(function(name) { return name.toUpperCase(); }));
    // return literals[0] + value.toUpperCase();
    // console.log(`${values[1]} ${values[0]}`)
};



//Параметры функции

//параметры по умолчанию

// function greet(greeting, name) {
// (greeting === undefined) ? greeting = 'hello' : greeting = greeting;
// (name === undefined) ? name = 'friend' : name = name;
// console.log(`${greeting} ${name} `);
// };

function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
};


greet(undefined, 'Andrey');
greet('Hi', undefined);
greet('Hi', 'Andrey');

function summa() {
    var sum = 0;
    // var arg = [].slice.call(arguments);
    // arg.forEach(function(value){
    // 	return sum = sum + value
    // });

    //и тоже самое 2-м способом:

    Array.prototype.forEach.call(arguments, function(value) {
        sum += value;
    })

    console.log(sum)
};

summa(1, 2, 3, 4, 5);

function summ(...values) {
    console.log(values);
    let sum = 0;
    values.forEach(function(value) {
        sum += value
    })
    console.log(sum);
};

summ(1, 2, 3, 4, 5);

function summu(...values) {
    console.log(values.reduce(function(prevItem, curItem) {
        return prevItem + curItem;
    }));
};

summu(1, 2, 3, 4, 5);





//цикл for ... of это тот же перебор как и у for...in (arr[key])только проще.

let arr = ['Andrey', 'Sasha', 'Alex'];

for (let key of arr) {
    console.log(key)
};






//Objects

let firstName = 'Bill';
let lastName = 'Gates';
let email = 'BillGates@microcoft.com';

let person = {
    firstName,
    lastName,
    email,
    sayHi() {
        console.log(`My name is ${this.firstName} ${this.lastName} and my mail is: ${this.email}`)
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    set fullName(value) {
        this.firstName = value;
    }
};

person.sayHi();

console.log(person.firstName);
console.log(person['firstName']);

let first = 'firstName';
console.log(person[first]);
console.log(person.fullName);

//старый способ set и get

// Object.defineProperty(person, 'fullName', {
// 	get: function() {
// 		return this.firstName + ' ' + this.lastName
// 	},
// 	set: function(value) {
// 		this.firstName = value;
// 	}
// });
// console.log(person.fullName)

//ES5

function createCar(property, value) {
    var car = {};

    car[property] = value;

    return car;
};
console.log(createCar('vin', 12121223));

//ES6

function createCar(property, value) {

    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property]
        },
    };
};
console.log(createCar('vin', 12121223));


//..............

let myName = 'Andrey';
let mySurname = 'Balabukha';
let mySex = 'male';

let persone = {
    myName,
    mySurname,
    mySex,
    about() {
        return `my name is ${this.myName} and my surname is ${this.mySurname}`
    },
    get getSex() {
        return `my sex is ${this.mySex}`
    },
    set setSex(value) {
        this.mySex = value
    }
};

console.log(persone.about());
console.log(persone);


// классы №9
// появление классов

class Task { // свойства указывать только в конструкторе
    constructor(title = Task.getDefaultTitle()){
        this.title = title;
        this._done = false;
        console.log('создание задачи');
    }
    // методы указывать после конструктора
    complete(){
        this._done = true;
        console.log(`Задача "${this.title}" выполнена`)
    }
    get done(){
        return (this._done === true) ? 'выполнено' : 'не выполнено';
    }

    set done(value){
        if (value != 'undefined' && value === 'boolean') {
            this._done = value
        } else {
            console.error('введите корректное значение')
        }
    }


    // статический метод, нах он нужен?
    static getDefaultTitle(){
        return 'задача'
    }
};



let task = new Task('убрать в комнатe');
// let task2 = new Task();
// console.log(Task);
// console.log(task);
// task.complete();
// console.log(task2.title);
console.log(task.done);
task.complete();
console.log(task.done);








//стрелочная функция