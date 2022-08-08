// const heading = document.querySelector("h2");
// const parent = heading.parentElement;
// parent.style.color="red"
// console.log(heading.parentElement.parentElement);


// getAttribute()
// setAttribute()
// const first = document.querySelector(".first");
// const idValue = first.getAttribute("id");
// console.log(idValue);

// const link = document.getElementById('link');
// const ShowLink = link.getAttribute("href");
// console.log(ShowLink);



// const links = document.querySelectorAll(".first");
// console.log(link);

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className;
console.log(classValue);
second.className = "color text";
third.className = "text"
third.classList.add('color')
