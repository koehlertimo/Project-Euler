function largestPrimeFactor(num){
    let highestPrime = 0;
    for(let i = 2; i*i < num; i++){
        let isPrime = true;
        if(num % i == 0){
            let factor = num/i;
            
            for(let j = 2; j * j < i; j++){
                if(i % j == 0){
                    isPrime = false;
                    break; 
                }
            }
            if(isPrime && i > highestPrime){
                highestPrime = i; 
            }
            isPrime = true;
            for(let j = 2; j * j < factor; j++){
                if(factor % j == 0){
                    isPrime = false;
                    break; 
                }
            }
            if(isPrime && factor > highestPrime){
                highestPrime = factor; 
            }
        }
    }
    return highestPrime;
}

console.log(largestPrimeFactor(600851475143))

//600851475143 