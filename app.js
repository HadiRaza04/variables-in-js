var myNumber1 = 04;

let myNumber2 = 05;

const myNumber3 = 06


// The value of var is changed when it reassign a value
myNumber1 = 40;
document.getElementById("demo").innerHTML = `Answer is: ${myNumber1}`; 
// myNumber1 becomes 40

// JS allow us to redeclear the variable of var 
var myNumber1 = 400;
document.getElementById("demo1").innerHTML = `Answer is: ${myNumber1}`; 
// myNumber1 becomes 400

// The let variable reassign variable but does not declear again varaible with same name 
myNumber2 = 50;
document.getElementById("demo2").innerHTML = `Answer is: ${myNumber2}`; 
// myNumber2 becomes 50

// The const variable neither reassign variable nor redeclear varaible with same name.
document.getElementById("demo3").innerHTML = `Answer is: ${myNumber3}`; 
// myNumber3 remains 06
myNumber3 = 60;
document.getElementById("demo3").innerHTML = `Answer is: ${myNumber3}`; 
// through an ERROR