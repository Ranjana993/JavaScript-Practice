// document.body.style.backgroundColor = "lightblue"
// const heading = document.getElementsByTagName('h2');
// heading[0].style.color = 'red';
// console.log(heading.length);
/* Tag Name */
// const items = document.getElementsByTagName('li');
// items[1].style.color = 'red'
// const betterItem = [...items];
// betterItem.forEach((item)=>{
//     console.log(item);
// })

// CLASS NAME ***************
// const listItems = document.getElementsByClassName("special");
// listItems[2].style.color = "blue"
// console.log(listItems);



// QUERY SELECTOR *********************
// const result = document.querySelector("#Result");
// result.style.backgroundColor = "blue";
// result.style.color = "white"


// const item = document.querySelectorAll('.special');
// console.log(item);
// item.forEach((item) =>{
//     console.log(item);
//     item.style.color="yellow"
// })


// TARGETING THE CHILD NODE *********
const result = document.querySelector("#Result");
const allChildNode = result.childNodes;
console.log(allChildNode);
const Children = result.children;
console.log(Children);
console.log(result.firstChild);
console.log(result.lastChild);
