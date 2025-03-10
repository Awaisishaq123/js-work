let user = prompt("select the field ")

let user1 = prompt("choose the field")

if (user == "Pre-Medical" && user1 == "BSC") {
    alert("sorry you are not allowed")
}

if (user == "Pre-Medical" && user1 == "BCOM" || "BBA") {
    alert("sorry you are not allowed")
}
if (user == "Pre-Medical" && user1 == "Any Medical Field") {
    alert("congratulation you are allowed")
}
if (user == "Pre-Engineer" && user1 == "BSC") {
    alert("congratulation you are allowed")
}

if (user == "Pre-Engineer" && user1 == "BCOM" ||"BBA") {
    alert("congratulation you are allowed")
}
if (user == "Pre-Engineer" && user1 == "Any Engineering Line") {
    alert("congratulation you are allowed".toUpperCase())
}
if (user == "Commerce" && user1 == "BSC") {
    alert("SORRY! You Are  Not Allowed")
}
if (user == "Commerce" && user1 == "BCOM"|| "BBA") {
    alert("congratulation you are allowed".toUpperCase())
}
if (user == "Commerce" && user1 == "Any Business Line") {
    alert("congratulation you are allowed")
}

else{
    alert(" do not put wrong field ")
}