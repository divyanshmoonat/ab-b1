// var name = 'John';

// // console.log(name, typeof name);

// var msg = "Welcome to JS Revision session, today we'll cover JS topics...";
// // console.log(msg);

// var strResult = msg.startsWith("Welcom");
// console.log(strResult);

// console.log(msg.charAt(16));

// console.log(msg.substring(15,35))

// console.log(msg.replaceAll("JS", "JavaScript"));

// var mobNo = "+919876543210";
// console.log(mobNo);

// if(mobNo.startsWith("+91")) {
//     console.log("Indian mob no")
// } else {
//     console.log("Foreign mob no")
// }

// var newStr = name + msg;
// console.log(newStr);

// var age = 10;
// console.log(age, typeof age);

// var ageNew = 5;

// var total = age + ageNew;
// console.log(total);

// var price = "123";
// console.log(price, typeof price)

// var newPrice = 100;

// var resultValue = price + newPrice // Implicit type coersion
// console.log(typeof resultValue, resultValue);


// var num1 = 12_345.16_789;
// console.log(num1, typeof num1)

// console.log(num1.toFixed(0));

// var powResult = Math.pow(45,2);
// console.log(powResult);

// console.log(Math.sqrt(4853));

// console.log(Math.random())


// var otp = (Math.random().toFixed(4) * 10000).toFixed(0)
// console.log(otp, "is your One Time password to login to Demo Bank")

// var bigNo = 123_456_323
// console.log(bigNo)

// var isValid = true;
// console.log(isValid, typeof isValid);

// var userName; // Default value "undefined" when you don't assign a value to a variable or  property doesn't exits
// console.log(userName, typeof userName);

// var userAddress = null;
// console.log(userAddress);


// console.log(phoneNo);

// Array & Object
const userNames = [
    "John",
    "Jack",
    "Peter",
    "Tony"
]

// console.log(userNames);

// Loop => Repetition

// while(condition) {
//     // Loop body
//     // Increment/Decrement
// }

// var i = 0;
// while (i < userNames.length) {
//     console.log(userNames[i]);
//     i++;
// }

/**
 * for(init;condition;inc/dec) {
 *  loop body
 * }
 */

// for (var i = 0; i < userNames.length; i++) {
//     console.log(userNames[i])
// }

const myFn = (element, index) => {
    console.log(element, index);
};

// userNames.forEach(myFn);

const myMapFn = (element, index) => {
    // console.log(element)
    const greetMsg = "Welcome " + element;
    return greetMsg;
}
const myNewArr = userNames.map(myMapFn);
// console.log(myNewArr);

const prices = [125, 568, 256, 99, 366, 499];

const myFilterFn = (element) => {
    // if (element > 100 && element < 500) {
    //     return true;
    // }
    // return false;

    return (element > 399) ? true : false

};

// const filteredArr = prices.filter(myFilterFn);
// console.log(filteredArr);
// // Find the price greater than 399

// const findArr = prices.find(myFilterFn);
// console.log(findArr);

// Sum up all the prices in "prices" array

// let total = 0;
// for (let i = 0; i < prices.length; i++) {
//     total += prices[i]
// }

// console.log(total);
// const myReduceFn = (total, element) => {
//     // console.log(total)
//     total += element;
//     return total;
// };

// const priceTotal = prices.reduce(myReduceFn, 0);
// console.log(priceTotal);

const userDetails = {
    name: "Tony",
    address: "123 Stark Industries",
    age: 50,
    hasDriversLicense: true
}

console.log(Object.keys(userDetails))
console.log(Object.values(userDetails))
console.log(Object.entries(userDetails))


const myMap = new Map();

myMap.set("name", "Tony");
myMap.set("address", "123 ABC");
console.log(myMap);
console.log(myMap.get("address"));

console.log(userDetails);

const object1 = {};
a = Symbol('a');
b = Symbol.for('b'); 

object1[a] = 'harry'; 
object1[b] = 'derry';  

const objectSymbols = Object.getOwnPropertySymbols(object1);
console.log(objectSymbols.length);