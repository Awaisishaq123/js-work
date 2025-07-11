// // let getInp = document.getElementById("todo")
// // let getUl = document.getElementById("ul")
// // let todoList = [];

// // let saved = localStorage.getItem('todos')

// // if(saved){
// //     todoList = JSON.parse(saved)
// //     for(var i=0; i < todoList.length; i++){
// //         render (todoList[i]);
// //     }
// // }

// // function addtodo(){
// //     if(getInp.value == ""){
// //         alert("fill the field")
// //         return;
// //     }
// // let todo = getInp.value
// // todo.push(todo)
// // localStorage.setItem('todos', JSON.stringify(todoList));

// // render (todo);
// // getInp.value = '';
// // }



// // function render(value) {
// //     getUl.innerHTML += "<li>" + value + " <span> <button onclick='editItem(this)' class='btn btn-dark'>Edit</button> <button onclick='deleteItem(this)' class='btn btn-danger'>Delete</button> </span></li>";
// //   }


//   var getInp = document.getElementById('todo');
//   var getUl = document.getElementById('ul');

//   var todoList = [];

//   // Page start hote hi list load karo (window.onload ke bagair)
//   var saved = localStorage.getItem('todos');
//   if (saved) {
//     todoList = JSON.parse(saved);
//     for (var i = 0; i < todoList.length; i++) {
//       render(todoList[i]);
//     }
//   }

//   function addTodo() {
//     if (getInp.value.trim() === '') {
//       alert("bhai field barh");
//       return;
//     }

//     var todo = getInp.value;
//     todoList.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todoList));
//     render(todo);
//     getInp.value = '';
//   }

//   function render(value) {
//     getUl.innerHTML += "<li>" + value + " <span> <button onclick='editItem(this)' class='btn btn-dark'>Edit</button> <button onclick='deleteItem(this)' class='btn btn-danger'>Delete</button> </span></li>";
//   }

//   function editItem(e) {
//     var oldValue = e.parentNode.parentNode.firstChild.textContent;
//     var newValue = prompt("Enter updated value", oldValue);

//     if (newValue !== null && newValue.trim() !== '') {
//       // Update DOM
//       e.parentNode.parentNode.firstChild.textContent = newValue;

//       // Update in array
//       var index = todoList.indexOf(oldValue);
//       if (index !== -1) {
//         todoList[index] = newValue;
//         localStorage.setItem('todos', JSON.stringify(todoList));
//       }
//     }
//   }

//   function deleteItem(e) {
//     var value = e.parentNode.parentNode.firstChild.textContent;

//     // Remove from array
//     var index = todoList.indexOf(value);
//     if (index !== -1) {
//       todoList.splice(index, 1);
//       localStorage.setItem('todos', JSON.stringify(todoList));
//     }

//     // Remove from DOM
//     e.parentNode.parentNode.remove();
//   }

//   function clr() {
//     getUl.innerHTML = '';
//     todoList = [];
//     localStorage.removeItem('todos');
//     alert("kya haal jani");
//   }


var getInp = document.getElementById('todo')
var getUl = document.getElementById('ul')

function clr(){
    getUl.innerHTML = ''
    
    alert("kya haal jani")
    
}

function editItem(e){
    var getValue = prompt("Enter updated value", e.parentNode.parentNode.firstChild.textContent)
    e.parentNode.parentNode.firstChild.textContent = getValue
}



function addTodo(){
    
    getUl.innerHTML += `<li> ${getInp.value} <span> <button style='list-style:decimal' onclick='editItem(this)' class='btn btn-dark'> Edit </button> <button onclick='this.parentNode.parentNode.remove()' class='btn btn-danger'> Delete </button> </span></li>`
    getInp.value = ''
    if(getInp.value == "" ){
        alert("bhai field barh")

    }
    

    // var createLi = document.createElement('li')
    // var text = document.createTextNode(getInp.value)
    // createLi.appendChild(text)
    // console.log(createLi)
}
