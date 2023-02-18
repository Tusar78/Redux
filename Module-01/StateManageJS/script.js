// Get Dom Element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// Initialize Counter value
let count = 0;

const counterEvent = ({ elem, text }) => {
  elem.addEventListener("click", () => {
    if (text === "+") {
      count++;
      counterEl.innerText = count;
    } else if (text === "-") {
      count--;
      counterEl.innerText = count;
    } else {
      alert("Please valid Parameter");
    }
  });
};

const increment = {
  elem: incrementEl,
  text: "+",
};

const decrement = {
  elem: decrementEl,
  text: "-",
};

counterEvent(increment);
counterEvent(decrement);
