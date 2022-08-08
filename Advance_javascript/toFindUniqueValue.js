// UNIQUE VALUE ...........................
const menu = [
    {
        name: "Pakoda",
        category: "breakfast"
    },
    {
        name: "Paratha",
        category: "lunch"
    },
    {
        name: "Roti Subji",
        category: "dinner"
    },
    {
        name: "Aalu Paratha",
        category: "dinner"
    },
    {
        name: "Noodles",
        category: "breakfast"
    },
    {
        name: "burger",
        category: "lunch"
    },
    {
        name: "Chaumin",
        category: "dinner"
    },
];
// const categories = ["all" ,...new Set(menu.map((items) => items.category))]
// console.log(categories);

// const result = document.querySelector('.result');
// result.innerHTML= categories.map((category)=>{
//     return `<button>${category}</button>`
// }).join(' ')

const all_Category = ["all",...new Set(menu.map((items)=> items.category))]
const result = document.querySelector('.result');
result.innerHTML= all_Category.map((category)=>{
    return `<button>${category}</button>`
}).join(' ')
console.log(all_Category);








