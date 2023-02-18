// Get Dom Element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counter2El = document.getElementById("counter2");
const increment2El = document.getElementById("increment2");
const decrement2El = document.getElementById("decrement2");

// Initialize Counter value
let count = 0;

const counterEvent = ({ elem, text, ui }) => {
  elem.addEventListener("click", () => {
    if (text === "+") {
      count++;
      ui.innerText = count;
    } else if (text === "-") {
      count--;
      ui.innerText = count;
    } else {
      alert("Please valid Parameter");
    }
  });
};

const increment = {
  elem: incrementEl,
  text: "+",
  ui: counterEl
};

const decrement = {
  elem: decrementEl,
  text: "-",
  ui: counterEl
};
const increment2 = {
  elem: increment2El,
  text: "+",
  ui: counter2El
};

const decrement2 = {
  elem: decrement2El,
  text: "-",
  ui: counter2El
};

counterEvent(increment);
counterEvent(decrement);
counterEvent(increment2);
counterEvent(decrement2);
