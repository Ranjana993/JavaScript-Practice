//  ADDING CSS <div className="

// const random = document.querySelector('.random');

// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '2rem';
// random.style.textTransform = 'capitalize';

// random.classList.add('title')

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('h2');

// const changeColor = () => {
//     let hasClassList = heading.classList.contains('red');
//     if (hasClassList) {
//         heading.classList.remove('red')
//     } else {
//         heading.classList.add('red')
//     }
// }
// btn.addEventListener('click', changeColor)



// EVENTS IN JAVASCRIPT*****************************
// 1.click
// 2.mouseup
// 3.mousedown
// 4.mouseenter
// 5.mouseleave

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     console.log("You clicked Me ..");
// })
// btn.addEventListener('mouseup', () => {
//     console.log("UP");
// })
// btn.addEventListener('mousedown', () => {
//     console.log("DOWN");
// })
// heading.addEventListener('mouseenter', () => {
//     heading.classList.add('red')
// })
// heading.addEventListener('mouseleave', () => {
//     heading.classList.remove('red')
// })

// ****************************************************************
// 1.Keypress
// 2.keydown
// 3.keyup
// const nameInput = document.getElementById('name')
// nameInput.addEventListener('keypress' , ()=>{
//     console.log("You Press a key");
// })
// nameInput.addEventListener('keydown', () => {
//     console.log("You Press a keyDown key");
// });

// nameInput.addEventListener('keyup', () => {
//     console.log(nameInput.value);
// })

// ****************************************************
// event object e , evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() prevent default behaviour

// const heading = document.querySelector('h1');
// const btn = document.querySelector('.btn');
// const Link = document.querySelector('#Link')

// heading.addEventListener('click', (e) => {
//     console.log(e.currentTarget);
//     heading.classList.add('blue');
//     console.log(this);
// });
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e.currentTarget);
//     heading.classList.add('red');
// })

// const ChangeFuc = (e) =>{
//     e.preventDefault()
//     console.log("heyy I am in");
// }
// Link.addEventListener('click' , ChangeFuc)


// *******************************************
// currentTarget 
// target
const btns = document.querySelectorAll('.btn')
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // console.log(e.currentTarget);
        // e.currentTarget.style.color = " green"
        console.log("Target", e.target);
        e.target.style.color = "blue"
    })
})







