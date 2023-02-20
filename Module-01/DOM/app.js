const todoTitle = document.getElementById('todo-title');

const items = document.getElementById('items');
// console.log(items);
// const listItem = items.getElementsByClassName('item')
// for (let i = 0; i < listItem.length; i++) {
//   const element = listItem[i];
//   element.addEventListener('click', function(e) {
//     let isRed = this.style.color;
//     if (isRed == 'red') {
//       element.style.color = 'black'
//     } else {
//       element.style.color = 'red'
//     }
//   })
// }

// const lastItem = document.querySelector('#items').querySelector('.item:nth-child(2)');
// console.log(lastItem);
// lastItem.style.color = 'red';

// const grandParent = document.querySelector('.incomplete-task');
// const parent = grandParent.children;
// const item = grandParent.querySelectorAll('.item');
// const item2 = parent[1].children;
// console.log(item);
// console.log(item2);

// const item = document.querySelector('.item');
// const parent = item.parentNode;
// console.log(parent);

// const item = document.querySelector('.item');
// const grandParent = item.closest('.incomplete-task');
// console.log(grandParent);

// const secondItem = document.querySelector('.item').nextElementSibling;
// const firstItem = secondItem.previousElementSibling;
// firstItem.style.color = 'green';

const container = document.querySelector('.incomplete-task');
const h3Element = container.querySelector('h3');
console.log(h3Element);

const newDiv = document.createElement('div');
newDiv.className = 'new-div';

newDiv.setAttribute('id', 'new-div');
newDiv.setAttribute('title', 'New Div Element');

newDiv.textContent = 'New Div Element';

container.insertBefore(newDiv, h3Element);

container.append(newDiv)
