function evenFibonacciNumbers(){
    let sum = 0; 
    let currentNum = 1; 
    let previousNum = 0; 
    let temp = 0;
    
    
    while(currentNum < 4000000){
        temp = currentNum; 
        currentNum = currentNum + previousNum; 
        previousNum = temp;

        if(currentNum % 2 == 0){
            sum += currentNum;
        }
    }
    return sum;
}

console.log(evenFibonacciNumbers());