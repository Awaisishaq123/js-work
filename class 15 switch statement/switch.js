// var marksheet =prompt("enter your grades ")

// switch(marksheet){
//     case (marksheet >= "90%")
//     grade = "A+"
// }

// var marks =prompt("enter your number") ;

//             switch (true) {
//                 case (marks >= 90):
                    
//                     document.write(grade = "A+");
//                     break;
//                 case (marks >= 80):
//                     grade = "A";
//                     break;
//                 case (marks >= 70):
//                     grade = "B";
//                     break;
//                 case (marks >= 60):
//                     grade = "C";
//                     break;
//                 case (marks >= 50):
//                     grade = "D";
//                     break;
//                 case (marks >= 40):
//                     grade = "E";
//                     break;
//                 default:
//                     grade = "F (Fail)";
//             }


// var marksheet = prompt("enter your number")

// switch(marksheet){
//     case (marksheet ==="90"):
//     document.writeln()
// }


   
        function generateMarksheet() {
            let marks = document.getElementById("marks").value;
            let grade = "";

            if (marks < 0 || marks > 100 || marks === "") {
                document.getElementById("output").innerHTML = "❌ Please enter a valid number between 0 and 100.";
                return;
            }

            marks = parseInt(marks);

            switch (true) {
                case (marks >= 90):
                    grade = "A+";
                    break;
                case (marks >= 80):
                    grade = "A";
                    break;
                case (marks >= 70):
                    grade = "B";
                    break;
                case (marks >= 60):
                    grade = "C";
                    break;
                case (marks >= 50):
                    grade = "D";
                    break;
                case (marks >= 40):
                    grade = "E";
                    break;
                default:
                    grade = "F (Fail)";
            }

            document.getElementById("output").innerHTML = `🎓 Your Grade: <b>${grade}</b>`;
        }
    