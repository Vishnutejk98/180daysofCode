/*
Requirements: 
3. Program to check if a number is a perfect square (Submittable assignment)
*/
var user_input = prompt("Enter the number to validate as Odd or Even!")
if(user_input >= 0){
 let sr = Math.sqrt(user_input)
 if((sr * sr) == user_input ){
     console.log("Prefect Square")
 }
 else{
     console.log("Not a Perfect Square")
 }
}
else{
    console.log("Invalid Number")
}
