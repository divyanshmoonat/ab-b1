// "use strict";
// ES5 ============================
var a = 10;
// console.log(a);

function demo() {
    console.log(this);
}

// demo();

const str2 = "hello \
there \
how are you\
";
// console.log(str2);

const str3 = "            hel       lo          the       re        "
// console.log(str3.trim())

const person = {
    name: "John",
    get getName() {
        return this.name;
    },
    set setName(name) {
        this.name = name;
    }
}
// ES6 =============================
function myFn5() {
    console.log("Hello")
}
const myFn6 = () => {
    console.log("Hello")
}; // arrow fn

// myFn5()
// myFn6()

function add5(a, b) {
    return a + b;
}

const add6 = (a, b) => a + b; // implict return

// console.log(add5(1, 2));
// console.log(add6(1, 2));


// Spread operator, Rest Operator (...)

const p1 = {
    name: "ABC"
}

// const p2 = p1; // association by reference (by reference, by value)

// console.log(p2.name);

const p2 = { // p2 and p1 are not connected by reference, rather value is passed
    ...p1, // copy everything(value) from p1
    age: 10,
    gender: "M"
}

p2.name = "XYZ";

// console.log(p2.name);
// console.log(p1.name);


// memory -> p1 -> p2 -> p3


const users = ["A", "B", "C"];

// const users2 = users; // assiciation by reference

// const users2 = [...users]; // copy all values from users

// users2.push("D");

const users2 = ["Z", ...users, "D", "E", "X"]

// Rest operator => To capture dynamic arguments to a function

const sum = (...args) => {
    console.log(args)
}

sum(10, 5, 1, 45, 58, 36, 100)