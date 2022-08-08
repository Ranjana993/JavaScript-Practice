//  Web Storage API - provided by browser
// session storage , local storage
// setItem , getitem , removeitem , clear

// localStorage.setItem('name' , 'John')
// sessionStorage.setItem('name' , 'John') 
localStorage.setItem('name', 'Ranjana')
localStorage.setItem('second', 'kumari')
localStorage.setItem('job', 'frontend developer')
localStorage.setItem('address', 'ballabgarh')

const name = localStorage.getItem('address')
console.log(name);
localStorage.removeItem('name')
localStorage.clear()


let fruits;
if (localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('friuts'));
}
else {
    fruits = [];
}
console.log(fruits);
// fruits.push('Apple');
fruits.push('Orange')
localStorage.setItem('fruits', JSON.stringify(fruits))






