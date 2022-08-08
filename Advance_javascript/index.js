const people = [
    {
        name: "Ranjana",
        age: 20,
        position: "developer"
    },
    {
        name: "Harshita",
        age: 22,
        position: "Designer"
    },
    {
        name: "Boby",
        age: 24,
        position: "Editor"
    },
    {
        name: "Mike",
        age: 30,
        position: "Fullstack developer"
    },

];


// const getAges = (person) => { console.log(person.age * 2); }

// const ages = people.map(getAges)
// const newPeople = people.map((item) => {
//     return {
//         firstName: item.name.toUpperCase(),
//         oldAge: item.age + 20,
//     };
// });
// console.log(newPeople);


// const names = people.map((people) => `<h2>${people.name}</h2>`)
// const result = document.querySelector('#result');
// result.innerHTML = names.join(' ');

const getAge = (person) => { console.log(person.age ) }
const ages = people.map(getAge)
const newPeople = people.map((item)=>{
    return {
        firstName : item.name
    }
});
console.log(newPeople);
const names = people.map((people) =>`<h2>${people.name}</h2>`)
const result = document.querySelector('#result')
result.innerHTML = names;








