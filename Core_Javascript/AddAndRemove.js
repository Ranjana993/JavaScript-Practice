// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// const result = document.querySelector("#result");
// const first = document.querySelector(".red");

// //  create empty element 

// const bodyDiv = document.createElement('div');
// const text = document.createTextNode("This is a simple body");
// bodyDiv.appendChild(text);
// document.body.insertBefore(bodyDiv , result);


// // creating heading
// const heading = document.createElement("h2")
// const textHeading = document.createTextNode("This is a dynamic heading");
// heading.appendChild(textHeading);
// // document.body.appendChild(heading);
// heading.classList.add('blue');
// console.log(heading);
// console.log(result);

// ***************************************
// 1. Prepend 
// 2. innerText
// const heading = document.createElement('h2');
// heading.innerText = `I'm a dynamic heading . `;
// document.body.prepend(heading);

// ************************************
// 1. remove
// 2. removeChild
// const result = document.querySelector("#result");
// result.remove();
// const heading = result.querySelector("h1");
// result.removeChild(heading);
// console.log(heading);

// *********************************************
// 1. innerHTML
// 2.textContent
const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);
const ul = document.createElement('ul')
ul.innerHTML = `<li class="item">List Item1</li>
        <li>List Item2</li> <li>List Item3</li>`
document.body.appendChild(ul)

div.textContent = "Hello world";
div.innerHTML= " Hello People"


