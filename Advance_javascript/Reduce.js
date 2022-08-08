// Reduce Method
// const staff = [
//     { name: "Ranjana", age: 20, position: "developer", salary: 2300 },
//     { name: "Rakhi", age: 23, position: "designer", salary: 2400 },
//     { name: "Peter", age: 24, position: "intern", salary: 2500 },
//     { name: "Ruhan", age: 25, position: "Boss", salary: 2600 },
// ];
// const salary = staff.reduce((total, person) => {
//     console.log(total);
//     console.log(person.salary);
//     total += person.salary
//     return total;
// }, 0)

// console.log(salary);

// **********************************************************************
// Reduce Object ................................

// https://api.github.com/users/john-smilga/repos?per_page=100
const cart = [
    {
        title: "Samsung Galaxy",
        price: 200,
        amount: 1
    },
    {
        title: "Google",
        price: 100,
        amount: 2
    },
    {
        title: "Xiomi",
        price: 300,
        amount: 3
    },
    {
        title: "Mi-Phone",
        price: 400,
        amount: 1
    },
    {
        title: "Redmi Note 5",
        price: 200,
        amount: 1
    },
];

const total = cart.reduce((total, cartItem) => {
    const { amount, price } = cartItem;
    total.totalItem += amount;
    total.cartItem += amount * price;
    return total
}, {
    totalItem: 0,
    cartItem: 0
});
console.log(total);

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'
const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.reduce((total, repo) => {
        const { language } = repo;
        // if (language) {
        // }
        // if (total[language]) {
        //     total[language] = total[language] + 1
        // }
        // else {
        //     total[language] = 1
        // }
        if (language) {
            total[language] = total[language] + 1 || 1
        }
        return total
    }, {})
    console.log(newData);
}
fetchData()











