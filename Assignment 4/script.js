/*
Requirements: 

1. Iterate from 1 to 100(using for loop and if else statement) (Submittable assignment)
    Print Relevel if divisible by 3
    Print Buzz if divisible by 5
    Print MindBuzz if divisible by 15
    Print the number if all the above condition fails
*/

console.log("Loop Starting!")
for(i = 1; i<=100;i++){
    if(i%3==0){
        console.log("Relevel")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else if(i%15==0){
        console.log("MindBuzz")
    }
    else{
        console.log(i)
    }
}
console.log("Loop Ended!")