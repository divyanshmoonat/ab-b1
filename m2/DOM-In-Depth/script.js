// console.log("DOM In Depth");

{/* <div class="card p-4">
    <h3>Arictle Title</h3>
    <span>Hello</span>
    <a href="www.google.com">Google</a>
    <p>Article description</p>
</div> */}

const main = document.getElementById("main");
main.classList.add("px-2");
main.classList.remove("border-blue");

// const h3 = document.createElement("h3");
// h3.textContent = "Article Title";

// const p = document.createElement("p");
// p.textContent = "Article description";

// const span = document.createElement("span");
// span.textContent = "Hello";

// const a = document.createElement("a");
// a.textContent = "Google";
// a.setAttribute("href","www.google.com");



const h4 = document.getElementById("newTitle");
// console.log(h4);
h4.remove();

// CRUD (Create Read Update & Delete)

// Events
// Event listeners
const onBtnClick = () => {
    // console.log("Btn clicked");
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    // div.setAttribute("class","card p4");
    div.classList.add("card");
    div.classList.add("p4");
    div.classList.add("m-2");

    div.innerHTML = `
    <h3 class="title">Article title using innerHTML</h3>
    <span>Hello using innerHTML </span>
    <a href="www.google.com"> Google</a>
    <p>Article description using innerHTML</p>
`

    // div.append(h3,p, span, a);

    main.append(div);
};

const btn = document.getElementById("btn");
// console.log(btn);
btn.addEventListener("click", onBtnClick);

let mode = "LIGHT";



const onBtn2Click = (e) => {
    if (mode === "LIGHT") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        mode = "DARK";
        e.target.textContent = "Light Mode";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        mode = "LIGHT";
        e.target.textContent = "Dark Mode";
    }
};

const onClickHandler = () => {
    console.log("Event triggered")
};

// btn2.addEventListener("click", onBtn2Click);

const btn2 = document.getElementById("btn2");
// const outer = document.getElementById("outer");
// const middle = document.getElementById("middle");
// const inner = document.getElementById("inner");

btn2.addEventListener("click", (e) => {
    // e.stopPropagation();
    console.log("Btn2 clicked", e.target);
});
// btn2.onclick = (e) => {
//     console.log("Btn2 clicked");
// };

// outer.addEventListener("click", (e) => {
//     console.log("Outer clicked", e.target);
// });

// middle.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     console.log("Middle clicked", e.target);
// });

// inner.addEventListener("click", (e) => {
//     console.log("Inner clicked", e.target);
// });