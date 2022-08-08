// document.querySelectorAll(".btn").forEach((item) => {
//     item.addEventListener("click", () => {
//         alert("this is the Random Click by me .")
//     })
// });

// document.write("HELLO WORLD")
// alert("this is the alert")
// console.log("this is the Log file.");


/*function , return , for loop to calculate the total
const gas = [20 , 30, 40 ,100];
const food = [10, 40, 50];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    if (total > 100) {
        console.log(`You are spending too much`);
        return total;
    }
    console.log(`You are less  then 100`);

    return total;
}
const gasTotal = calculateTotal(gas)
const foodTotal = calculateTotal(food)
const randomTotal = calculateTotal([200, 300, 400])

console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal
});
*/


// Refrence Vs Value 
// const num = 2; /* This is the first example*/
// let num2 = 7;
// console.log(`The first Number is ${num}`);
// console.log(`The second Number is ${num2}`);

// let person = { name: "Ranjana", age: 20 }  /* This is the second example*/
// let person2 = { ...person };   
// person2.name = "Susan"
// console.log(`The name of first Person one is ${person.name}`);
// console.log(`The name of second Person one is ${person2.name}`); 


// Truthy or Falsy 
//  " " , '' , NaN , False , null , undefined 

// let name = undefined;
// if (name) {
//     console.log(`this is truethy`);
// }
// else {
//     console.log(`this is falsy`);
// }

/* OPERATOR IN JAVASCRIPT */
// 1 . uniary (operate only single value)
// 2. Binary  (operate double value)
// 3 . ternery ( operate on three values)

// let value = 3> 1 ;
// value ? console.log("this is truthy") : console.log("this is false")


// LOCAL SCOPE AND GLOBAL SCOPE
// let name = "Ranjana"; /* This is Global Scope */
// function calCulate() {
//     console.log(`This is the name inside the function ${name}`);
//     function innerFunction() {
//         name = "This is the InnerFunction";
//         console.log(`This is the function inside the function`);
//     }
//     innerFunction()
// }
// if (true) {
//     name = "Pants"
//     console.log(`This is the name inside the if block ${name}`);
// }
// calCulate()
// // LOCAL SCOPE 
// let name = "Outside Name"
// function outer() {
//     const name1 = "Inner name"
//     console.log(` ${name}`);
//     function inner() {
//         const name2 = "INside second function"
//         console.log(`${name1}`);
//     }
//     console.log(`This is ${name2} `);
//     inner()
// }
// outer()