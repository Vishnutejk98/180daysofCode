/*
2. Write a function that compares two numbers and returns the larger of the two.
Bonus: Output appropriate message if numbers cant be compared or are equal
*/ 
function Bonus(value1,value2){
    return (value1 > value2 ) ? value1 : value2;
}
console.log(`Largest Number sent to the function is : ${Bonus(10,12)}`);