/*
Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

function smallestMultiple(){
    let isMultiple = false; 
    let currentNum = 20;

    while(!isMultiple){
        if((currentNum % 20 == 0) && (currentNum % 19 == 0) && (currentNum % 18 == 0) && (currentNum % 17 == 0) && (currentNum % 16 == 0) && (currentNum % 15 == 0) && (currentNum % 14 == 0) && (currentNum % 13 == 0) && (currentNum % 12 == 0) && (currentNum % 11 == 0)){
            return currentNum;
        }
        currentNum += 20;
    }
}

console.log(smallestMultiple());


