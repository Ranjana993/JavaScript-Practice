// Async / await 
// async must be present and always return a promise
// await will always wait till the promise is settled 
// error handling  - try /catch block



// EXAMPLE OF ASYNC AWAIT 
// const example = async () => {
//     return "Hello world";
// }
// async function SomeFunc() {
//     const result = await example()
//     console.log(result);
//     console.log("hello World");
// }
// SomeFunc();


const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Johnny" },
    { id: 3, name: "Bunny" },
];
const articles = [
    { userId: 1, article: ['one', 'two', 'three'] },
    { userId: 2, article: ['Four', 'five'] },
    { userId: 3, article: ['six', 'seven', 'eight', 'nine'] },
]

// for user.......................
const getUser = (name) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name)
        if (user) {
            return resolve(user)
        }
        else {
            reject(` No such user Is FOUND WITH NAME ${name} `)
        }
    })
}
const getData = async () => {
    const user = await getUser('Bunny');
    console.log(user);
    if (user) {
        const article = await getArticle(user.id)
        console.log(article);
    }
}
getData()


// getUser('Bunny')
//     .then((user) => getArticle(user.id))
//     .then((article) => console.log(article))
//     .catch((err) => console.log(err))

// For article ....................................
const getArticle = (userId) => {
    return new Promise((resolve, reject) => {
        const userArticle = articles.find((user) => user.userId === userId)
        if (userArticle) {
            return resolve(userArticle.article)
        } else {
            reject('Wrong Id')
        }
    })
}


























