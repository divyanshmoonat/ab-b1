// console.log("Async Programing");
const greet = () => {
    console.log("Welcome, Mr XYZ");
};

// const interval1 = setInterval(greet, 2_000);
// setTimeout(() => {
//     clearInterval(interval1)
// }, 15_000);
// let counter = 1;
// const interval2 = setInterval(() => {
//     console.log("New set interval", counter)
//     counter++;
//     if (counter > 5) {
//         clearInterval(interval2);
//     }
// }, 1_000);

// console.log("1");
// console.log("2");
// const timeout1 = setTimeout(greet,5_000); // Welcome..
// // clearTimeout(timeout1);

// console.log("3");
// // greet();
// console.log(1+3);
// console.log(1+2+2);


// console.log(interval1, interval2);

// clearInterval(interval2);
// setTimeout(callbackFn,timeInMs); // Executes only 1 after n seconds
// sum(callbackFn);

// setInterval(callbackFn, timeInMs); // Repeats after every n seconds

// console.log(date);
// console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
// DD/MM/YYYY
// Create a digital clock using JS

// HH:MM:SS


// setInterval(() => {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();

//     const time = `${hours}:${minutes}:${seconds}`;
//     const clock = document.getElementById("clock");
//     clock.textContent = time;
//     // console.log(time);
// }, 1_000)

// Image changer
/**
 * 1. Create an image in html file
 * 2. In JS, create an array of image urls
 * 3. setInverval => Every 5 sec
 *  3.1 Change the src of img tag with new image url from image array
 */

// Promise => Pending, Rejected, Fulfilled/Resolve

const promise = new Promise((res, rej) => {
    setTimeout(() => {
        // Resovle or reject
        res("Let's go for a trip");
        // rej("Nahi kuch urgent kaam hai");
    }, 3_000);
});

// console.log("1");
// promise
//     .then(() => {
//         // When promise is resolve
//         // console.log("Resolved", promise);
//         console.log("2")
//     })
//     .catch(() => {
//         // When promise is rejected
//         // console.log("Rejected", promise);
//         console.log('2')
//     })
// console.log('3')


// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res) => {
//     console.log("resolved", res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch(() => {
//     console.log("rejected")
// })

const input = document.getElementById("input");
// console.log(input);

// Debouncing
let timeout;
input.addEventListener("keypress", (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log(e.target.value)
    }, 1_000);
});