 var readLineSync = require('readline-sync');

 var n = readLineSync.question("Enter the number of stages(n): ");
 
 if(!isNaN(n)){
   var string = "";
for (var i = 0; i < n; i++) {
  for (var j = 0; j < n - i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
 }else{
   console.log("Enter valid number")
 }
