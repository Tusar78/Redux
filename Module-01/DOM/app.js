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

const grandParent = document.querySelector('.incomplete-task');
const parent = grandParent.children;
const item = parent[1].children;
console.log(item);