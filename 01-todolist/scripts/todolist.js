const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

const inputTextEle = document.querySelector(".js-inputText");
const inputDateEle = document.querySelector(".js-inputDate");
const showlistEle = document.querySelector(".js-record-container");

showTodoList();

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

// here can not use let showTodoList = function () {}, something to do with window scope
function showTodoList() {
  let todoListHTML = ``;
  // repalce for loop with forEach()
  todoList.forEach((param, index) => {
    todoListHTML += `
                <p class='js-record-name'>${param.name}</p>
                <p class='js-record-date'>${param.date}</p>
                <button class='js-record-delete' onclick="
                  todoList.splice(${index}, 1);
                  showTodoList();
                  // localStorage.setItem('todoList', JSON.stringify(todoList));"
                >
                    Delete
                </button>


          `;
  });

  showlistEle.innerHTML = todoListHTML;
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
