// Bubbling
// event propogation
// event capturing

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');


const showBubbling = (e) => {
    console.log('Current Target', e.currentTarget);
    // console.log("Target", e.target);
    // let links = e.target.classList.contains('link')
    // if (links) {
    //     console.log("You Clicked Me");
    // }
}

const stopPropagation = (e) => {
    console.log("You click It again");
    e.stopPropagation();
}

container.addEventListener('click', showBubbling, { capture: true })
document.addEventListener('click', showBubbling, { capture: true })
window.addEventListener('click', showBubbling, { capture: true })
list.addEventListener('click', showBubbling, { capture: true })

















