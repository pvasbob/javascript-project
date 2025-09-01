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

function showTodoList() {
  let todoListHTML = ``;
  for (let i = 0; i < todoList.length; i++) {
    todoListHTML += `
                <p class='js-record-name'>${todoList[i].name}</p>
                <p class='js-record-date'>${todoList[i].date}</p>
                <button class='js-record-delete' onclick="
                  todoList.splice(${i}, 1);
                  showTodoList();
                  // localStorage.setItem('todoList', JSON.stringify(todoList));"
                >
                    Delete
                </button>


          `;
  }
  showlistEle.innerHTML = todoListHTML;
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
