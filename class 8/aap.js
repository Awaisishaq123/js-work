var cricketPlayers =['Babar',"Shohib Akmal","Misbah","Hasan Ali", "Shadab Khan","Imam-ul-Haq","Fakhar Zaman","Shahid Afridi","Hasnain","Imad"]

var cricketName = prompt("Enter Cricketer Name")
var match=false

for(i=0; i<= cricketPlayers.length; i++){
    if(cricketName == cricketPlayers[i]){
        document.write(cricketName + " " + "is found succes")
        break
        
    }
    
    else{
        document.write("is not found")
    }
   
}


// var str = prompt("enter any word")
// var check =""

// for (var i =str.length -1; i>=0; i--){
//     check += str [i]
// }


// if(check ==str){

//     document.write(str + "word is palindrome")
// }

// else{
//     document.write(str +"word i not palindome")
// }