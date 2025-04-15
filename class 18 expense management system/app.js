// var getinp = document.getElementById("inp");
// var getinp2 = document.getElementById("inp2");
// function clr(){
//     getinp2.innerHTML =''
// }
var getitem = document.getElementById("item");
var getprice = document.getElementById("price");
var getlist = document.getElementById("tablebody");
var gettotal = document.getElementById("total");

let getvalue = [];

function additem() {
  if (getitem.value == "" || getprice.value == "") {
    alert("Please fill all fields");
    return;
  }
  let newitem = getitem.value;
  let newprice = getprice.value;
  getlist.innerHTML += ` <tr><td>${newitem}</td><td>${newprice}</td><td><button onclick="this.parentNode.parentNode.remove()">Delete</button> <button onclick='editr(this)'>Edit</button></td></tr>`;
  getvalue.push(newprice);
  gettotal.innerHTML = getvalue.reduce((a, b) => parseInt(a) + parseInt(b));
  getitem.value = "";
  getprice.value = "";
}

function clearall() {
  if (getlist.innerHTML == "" || gettotal.innerHTML == 0) {
    alert("No items to clear");
    return;
  }
  if (confirm("Are you sure you want to clear all items?") == false) {
    return;
  }

  getlist.innerHTML = "";
  gettotal.innerHTML = 0;
  getvalue = [];
}

function editr(e) {
  console.log(e.parentNode.parentNode.firstChild.textContent);
  console.log(e.parentNode.firstChild.textContent);
  var editable = prompt(
    "Edit your task",
    e.parentNode.parentNode.firstChild.textContent
  );
  var newprice = prompt(
    "Edit your price",
    e.parentNode.firstChild.nextSibling.textContent
  );
  e.parentNode.parentNode.firstChild.textContent = editable;
  e.parentNode.parentNode.firstChild.nextSibling.textContent = newprice;
}
