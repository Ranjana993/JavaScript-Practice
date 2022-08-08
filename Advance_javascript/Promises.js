//  Promises 
// async await 
// consume/ use promises
// Pending , Rejecting , FulFilled

// const value = 2;
// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random()*3);
//     console.log(randomNumber);
//     if (randomNumber === value) {
//         resolve('Congratulation You guess the number :)')
//     } else {
//         reject('You are wrong')
//     }

// })
// console.log(promise);
// promise.then((data) => console.log(data)).catch((err) => { console.log(err); })


//  ********************************************************************
// ANOTHER EXAMPLE OF PROMISES
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    addColor(1000, '.first', 'red')
        .then(() => addColor(2000, ".second", "blue"))
        .then(() => addColor(2000, ".third", "purple"))
        .catch((err) => {
            console.log(err);
        })
});



const addColor = (time, selector, color) => {
    const element = document.querySelector(selector);
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color
                resolve()
            }, time);
        }
        else {
            reject(` There is no such element for ${selector} `)
        }
    })
}









