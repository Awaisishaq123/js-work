var getInp = document.getElementById("todo");
var getUl = document.getElementById("ul");
var todoList = [];

var saved = localStorage.getItem("todos");
if (saved) {
  todoList = JSON.parse(saved);
  showList();
}

function addTodo() {
  if (getInp.value === "") {
    alert("bhai field barh");
    return;
  }

  todoList.push(getInp.value);
  localStorage.setItem("todos", JSON.stringify(todoList));
  showList();
  getInp.value = "";
}

function showList() {
  getUl.innerHTML = "";

  for (var i = 0; i < todoList.length; i++) {
    getUl.innerHTML += `<li>
      ${todoList[i]}
      <span>
        <button onclick='editItem(${i})' class='btn btn-dark'>Edit</button>
        <button onclick='deleteItem(${i})' class='btn btn-danger'>Delete</button>
      </span>
    </li>`;
  }
}

function editItem(index) {
  var updated = prompt("Enter updated value", todoList[index]);
  if (updated !== null && updated !== "") {
    todoList[index] = updated;
    localStorage.setItem("todos", JSON.stringify(todoList));
    showList();
  }
}

function deleteItem(index) {
  todoList.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todoList));
  showList();
}

function clr() {
  todoList = [];
  localStorage.removeItem("todos");
  getUl.innerHTML = "";
}
