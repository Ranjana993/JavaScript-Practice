// Array Destructuring 
// const friends = ["John", "Ronny", "Boby", "Serru"];
// const fruits = ["orange", "Mango", "Grapes", "Papaya"];

// const fruit1 = fruits[0]
// const fruit2 = fruits[1]
// const fruit3 = fruits[2]
// console.log(fruit1, fruit2, fruit3);
// const [John, Ranjana, bunny, ruby] = friends;
// console.log(John, Ranjana, bunny, ruby);

// let first = "Ranjana";
// let second = "Kumari";
// // let temp = second;
// // second = first;
// // first = temp;
// [second, first] = [first, second]
// console.log(first, second);

// ******************************************************************
// DESTRUCTURING OBJECTS

const detail = {
    first: " Boby ",
    last: " Sanger ",
    city: " Chicago ",
    siblings: {
        sister: " Jenny "
    },
}
const firstName = detail.first;
const lastName = detail.last
const sister = detail.siblings.sister

const { first, last, siblings, city } = detail
console.log(first, last, siblings, city);
// console.log(firstName, lastName, sister);














