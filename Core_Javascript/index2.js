// event Propogation
// event bubbling

// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');
// // const heading = document.querySelector('.heading');

// const sayHello = () => {
//     console.log("hello World");
// }

// btn.addEventListener('click', () => {
//     const element = document.createElement('h1');
//     element.classList.add('heading');
//     element.textContent = "I'm inside the container.";
//     container.appendChild(element)
// })

// container.addEventListener('click', (e) => {
//     if (e.target.classList.contains('heading')) {
//         console.log("heyy there");
//     }
// })
// heading.addEventListener('click', sayHello)


// *************************************************************
// submit event listener
// prevent default
// how to get a value
const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    console.log(name.value);
    console.log(password.value);
});











