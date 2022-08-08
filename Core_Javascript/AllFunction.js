//  callBack , Higher order function and  Function as a first class

// function Morning(name) {
//     return `Good Morning ${name.toUpperCase()}`
// }

// function Greet(name, cb) {
//     const myName = "John"
//     console.log(`${cb(name)} ${myName}`);
// }
// Greet("Bebo", Morning);
// Greet("Peter", Morning);

// POWERFULL ARRAY METHOD 
// const arr = [1,2,3,4,5,6]
// for(let i = 0 ; i < arr.length ; i ++){
//     console.log(arr[i]);
// }

// FOREACH
// const people = [
//     {name:"Peter" , Age:20 , Position:"Develper"},
//     { name: "Park", Age: 22, Position: "Designer" },
//     { name: "Jullie", Age: 25, Position: "Boss" }
// ];
// function showAllPerson(person){
// console.log(person.Position.toUpperCase());
// }
// // people.forEach(showAllPerson)
// people.forEach((item)=>{
//     console.log(item.Position.toUpperCase());
// })


// MAP METHOD &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
// const people = [
//     { name: "Peter", Age: 20, Position: "Develper" },
//     { name: "Park", Age: 22, Position: "Designer" },
//     { name: "Jullie", Age: 25, Position: "Boss" }
// ];

// // const ages = people.map((person) => {
// //     return person.Age;
// // });
// // console.log(ages);

// const newData = people.map((person)=>{
//     return {
//         fullName:person.name.toUpperCase(),
//         age:person.Age+20
//     }
// })
// const names = people.map((person) =>{
//     return `<h2>${person.name}</h2>`
// })
// document.body.innerHTML = names.join(' ')
// console.log(newData);





// FILTER METHOD**********************
// const people = [
//     { name: "Peter", Age: 20, Position: "Develper" },
//     { name: "Park", Age: 22, Position: "Designer" },
//     { name: "Jullie", Age: 25, Position: "Boss" },
//     { name: "Rag", Age: 20, Position: "FrontEnd Developer" }
// ];

// const PersonFilter = people.filter((person) => {
//     return person.Age <= 25;
// });
// const developer = people.filter((person) => {
//     return person.Position === "Develper"
// })
// console.log(developer);
// console.log(PersonFilter);


// FIND METHOD **************************************
// const people = [
//     { name: "Peter", Age: 20, Position: "Develper",id:1 },
//     { name: "Park", Age: 22, Position: "Designer", id: 3},
//     { name: "Jullie", Age: 25, Position: "Boss", id: 3},
//     { name: "Rag", Age: 20, Position: "FrontEnd Developer", id: 4 }
// ];
// const personId = people.find((person)=>{
//     return person.id === 3;
// });
// console.log(personId);
// // filter
// const personId1 = people.filter((person) => {
//     return person.id === 3;
// });
// console.log(personId1);
// const name =["Ruhan" , "Susan" , "Mozii"]
// console.log(name.find((person)=>{
//     return person === "Ruhan"
// }));


// REDUCE METHOD********************
// const people = [
//     { name: "Peter", Age: 20, Position: "Develper", id: 1, salary: 200 },
//     { name: "Park", Age: 22, Position: "Designer", id: 3, salary: 300 },
//     { name: "Jullie", Age: 25, Position: "Boss", id: 3, salary: 400 },
//     { name: "Rag", Age: 20, Position: "Developer", id: 4, salary: 500 }
// ];

// const Total = people.reduce((acc , currItem)=>{
//     console.log(`Total ${acc}`);
//     console.log(`Curren Money ${currItem.salary}`);
//     acc += currItem.salary;
//     return acc;
// } , 0);
// console.log(Total);


// MATH *************************




