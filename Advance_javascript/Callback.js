//  Callback function  => used in array method , setTimeout and event Listener etc. 
// const makeUpperCase = (value) => {
//     console.log(value.toUpperCase());
// }

// // makeUpperCase('rohon')
// const handleName = (name, cb) => {
//     const fullName = ` ${name} smith `;
//     cb(fullName)
// }
// const btn = document.querySelector('.btn')
// btn.addEventListener('click' , () =>{
//     console.log("hello World");
// })
// handleName('peter', makeUpperCase)


// *******************************************************************
// CallBack Hell

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')


btn.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = "red"
        setTimeout(() => {
            second.style.color = "blue"
            setTimeout(() => {
                third.style.color = "green"
            }, 3000);
        }, 2000);
    }, 1000);



})








