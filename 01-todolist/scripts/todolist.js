const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

const inputTextEle = document.querySelector(".js-inputText");
const inputDateEle = document.querySelector(".js-inputDate");
const showlistEle = document.querySelector(".js-record-container");

showTodoList();

document.querySelector(".js-addButton").addEventListener("click", addTodo);
document.querySelector(".js-inputText").addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTodo();
});

function addTodo() {
  console.log(inputTextEle.value);
  console.log("inside AddTodo, before date");
  console.log(inputDateEle.value);
  console.log("inside AddTodo");
  if (inputTextEle.value === "" || inputDateEle.value === "")
    alert("Please Enter a valid Name and/or a Date");
  else {
    todoList.push({ name: inputTextEle.value, date: inputDateEle.value });
    showTodoList();

    inputTextEle.value = "";
    inputDateEle.value = "";
  }

  // showlistEle.innerHTML = todoList;
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

// here can not use let showTodoList = function () {}, something to do with window scope, or Hoisting.
function showTodoList() {
  let todoListHTML = ``;
  // repalce for loop with forEach()
  todoList.forEach((param, index) => {
    todoListHTML += `
                <p class='js-record-name'>${param.name}</p>
                <p class='js-record-date'>${param.date}</p>
                <button class='js-record-delete'>Delete</button>
          `;
  });

  showlistEle.innerHTML = todoListHTML;
  document
    .querySelectorAll(".js-record-delete")
    .forEach((deleteButton, index) => {
      // DO NOT ADD INDEX INSIDE THE () OF THE LAMBDA FUNCTION, THAT IS EVENT, NOT
      // THE ACTUAL INDEX OF FOREACH.
      // Any function passed into .addEventListener() is called by browser, dand
      //  thus can only receive event form the () from browser.
      // deleteButton.addEventListener("click", (index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        showTodoList();
      });
    });
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
