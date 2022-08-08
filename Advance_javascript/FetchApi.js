// Fetch api - Browser api for http request 
// Default - GET Request  , support other method asa well 
// Return Promise

const url = 'https://www.course-api.com/react-tours-project'


// By using Callback****************

// console.log(fetch(url));
// fetch(url)
// .then((resp)=>resp.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// 1.  By using async await frtching the data

// const getData = async () => {
//     try {
//         const resp = await fetch(url)
//         const data = await resp.json()
//         console.log(data);
//     } catch (error) {
//         console.log(err);
//     }
// }
// getData()




// //////////////////////////////////////////////////////////////////
// 2. Fetch Error 
const getTour = async () => {
    try {
        const resp = await fetch(url)
        const tour = await resp.json()
        console.log(tour);
    } catch (error) {
        console.log(err);
    }
}
const btn = document.querySelector('.btn')
btn.addEventListener('click', getTour)




