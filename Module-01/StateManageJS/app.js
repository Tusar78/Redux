// Select Dom Element Function
const selectFunc = elementName => {
  return document.querySelector(`${elementName}`);
}

// Select Dom Element
const todoTitle = selectFunc('.todo-title');
const counterUi = selectFunc('#counter');
const incrementEl = selectFunc('#increment');
const decrementEl = selectFunc('#decrement');



// Initialize Count Value
let count = 0;

// Counter Method
const counterMethod = ({btn, type}) => {
  console.log(btn);
  btn.addEventListener('click', () => {
    if (type === '+' && count >= 0) {
      count++;
      counterUi.innerText = count;
      todoTitle.innerText = 'Simple Counter Incrementing...';
      count > 0 && (decrementEl.style.filter = 'grayscale(0%)');
    } else if (type === '-' && count >= 1) {
      count--;
      counterUi.innerText = count;
      todoTitle.innerText = 'Simple Counter Decrementing...';
      count == 0 && (btn.style.filter = 'grayscale(100%)');

    } else {
      todoTitle.innerText = 'Simple Counter Application';   
    }
  })
}

// Increment and Decrement Object
const incObj = {
  btn: incrementEl,
  type: '+'
}

const decObj = {
  btn: decrementEl,
  type: '-'
}

// Calling Special Function
counterMethod(incObj);
counterMethod(decObj);