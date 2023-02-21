// Select Element and initialize value to the variable

const newTask = document.querySelector(".task-field");
const form = document.querySelector("form");
const todoUl = document.querySelector("#items");
const completeUl = document.querySelector(".complete-list ul");

// Create Task Function
const createTask = (task) => {
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");

  listItem.className = 'item flex items-center border-b py-2 space-x-1';

  checkbox.type = "checkbox";
  label.innerText = task;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  return listItem;
};

const addTask = function(event) {
  event.preventDefault();
  const listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = "";

  bindInCompleteItem(listItem, completeTask);
};

const completeTask = function() {
  const listItem = this.parentNode;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete ml-6 px-2 bg-red-300 text-red-600 rounded";
  listItem.appendChild(deleteBtn);

  const checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);

  bindCompleteItem(listItem, deleteTask);
};

const deleteTask = function() {
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem)
};

const bindInCompleteItem = (taskItem, checkboxClick) => {
  const checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

const bindCompleteItem = (taskItem, deleteBtnClick) => {
  const deleteBtn = taskItem.querySelector('.delete');
  deleteBtn.onclick = deleteBtnClick;
}

for (let i = 0; i < todoUl.children.length; i++) {
  bindInCompleteItem(todoUl.children[i], completeTask);  
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItem(completeUl.children[i], deleteTask);  
}


form.addEventListener('submit', addTask);