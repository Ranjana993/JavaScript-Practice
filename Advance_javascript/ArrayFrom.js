// Array.from => NOT ON PROTOTYPE
// from => returns Array Objects from an object .
// with a length property or an itterable object .
//  from - turn array like /ish into array - string, nodeList , Set

const udemy = "udemy"
// console.log(Array.from(udemy));
const text = document.querySelectorAll('.text');

const newText = Array.from(text).find((item) => item.textContent === 'PERSON');
const items = Array.from({ length: 120 }, (_, index) => {
    return index;
});
const itemsPerPages = 14;
const pages = Math.ceil(items.length / itemsPerPages);

const newItem = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPages;
    const template = items.slice(start, start + itemsPerPages);
    return template
});

console.log(newItem);
console.log(pages);

// console.log(items);
// console.log(newText);













