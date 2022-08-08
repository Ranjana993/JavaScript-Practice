// Filter => It return A new Array , can manupulate the size of Array return basd on condition .
// Find => return single instances and return first match only if no match return - undefined


// const people = [
//     { name: "Ranjana", Age: 20, Position: "Developer" },
//     { name: "Rakhi", Age: 22, Position: "Designer" },
//     { name: "Rohit", Age: 24, Position: "Seller" },
//     { name: "Mohit", Age: 26, Position: "Manager" },
// ];
// console.log(people);
// filter
// const newFilter = people.filter((person) => {
    // if (person.Age < 25) {
    //     return person
    // }
//     return person.Age < 25
// });
// console.log(newFilter);
// const Developer = people.filter((person)=>person.Position ==='Developer')
// console.log(Developer);

// If No Match 
// const no_Match = people.filter((item)=>item.Position === "senior_dev")
// console.log(no_Match);

// Find ******************************************************
const people = [
    { name: "Ranjana", Age: 20, Position: "Developer" },
    { name: "Rakhi", Age: 22, Position: "Designer" },
    { name: "Rohit", Age: 24, Position: "Seller" },
    { name: "Mohit", Age: 26, Position: "Manager" },
];
// const fruit = ["Mango" , "Orange" , "Grapes","Lemon" , "Litchi"]
// const Ranjana = people.find((item)=> item.name === "Rakhi")
// console.log(Ranjana);
// const fruits = fruit.find((fruit)=> fruit === "Orange")
// console.log(fruits);

// No Match **********************************************

const newPeople = people.find((person)=> person.Age > 40)
console.log(newPeople); 
// Multiple Match

const random_Match = people.find((person)=>person.Age < 25)
console.log(random_Match );





