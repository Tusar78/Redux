// Get Dom Element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initialize Counter
let count = 0;

// Create a Function called Counter Event
const counterEvent = ({ elem, ui, incDec }) => {
  elem.addEventListener("click", () => {
    if (incDec === "+") {
      ui.innerText = count++;
    } else if (incDec === "-") {
      ui.innerText = count--;
    } else {
      alert('Enter right parameter');
    }
  });
};

const increment = {
  elem: incrementEl,
  ui: counterEl,
  incDec: "+"
}

const decrement = {
  elem: decrementEl,
  ui: counterEl,
  incDec: "-"
}

counterEvent(increment);
counterEvent(decrement);