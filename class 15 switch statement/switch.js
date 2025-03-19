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


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marksheet Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        .result {
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <h2>Marksheet Generator</h2>
    
    <label for="marks">Enter Marks (out of 100):</label>
    <input type="number" id="marks" min="0" max="100">
    <button onclick="generateMarksheet()">Generate</button>

    <div class="result" id="output"></div>

    <script>
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
    </script>

</body>
</html>