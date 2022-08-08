// Rest Operator ..............
// const fruits = ['Apple', 'Mango', 'Orange ', 'Grapes', 'Litchi'];
// const [first, ...restOfTheFruit] = fruits;
// console.log(first, restOfTheFruit);

// const specificFruits = restOfTheFruit.find((item) => item === "Mango")
// console.log(specificFruits);
//  Object 
// const person = { Name: "Ronny", lastName: " Smith", Job: "Developer" }
// const { Name } = person
// console.log(Name);

// Function 
// const getAverage = (Name, ...score) => {
//     console.log(Name);
//     console.log(score);
//     const average = score.reduce((total, item) => { return total += item },0)/ score.length;
//     console.log(average);
// }
// getAverage(person.Name, 23, 54)



// ***********************************************************************
//  Spread Opersator .........
const udemy = "udemy"
const newUdemy = [...udemy]
console.log(newUdemy); 
const boys = ["John", "Rohan", "Mohan"];
const girls = ['Sita', 'Gita', 'Rubina'];
const bestFriend = "Rubby"

// const friends = [...boys , ...girls , bestFriend]
// console.log(friends);
// const newFriends = [...friends];
// newFriends[0]="Hunny";
// console.log(friends);
// console.log(newFriends);


// OBJECT(ES 2018, ES-8) ....................
// const person = { "name": "Ranjana", job: "developer" }
// console.log(person);
// const newFriends = { ...person , city:"Faridabad" , name:"Ramesh" }
// console.log(newFriends);
















