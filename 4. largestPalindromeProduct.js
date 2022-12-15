function largestPalindromeProduct(){
    let num1 = 999;    
    let num2 = 999;
    let largestPalindrome = 0;

    for(let i = num1; i >= 100; i--){
        for(let j = num2; j >= 100; j--){
            if(isPlaindrome(i * j)){
                if(i*j > largestPalindrome){
                    largestPalindrome = i * j;
                }
            }
        }
    }
    return largestPalindrome;

}

function isPlaindrome(num){
    let numAsString = num.toString();
    let numAsArray =  numAsString.split(""); 
    let reversedString = ""; 

    for(let i = numAsArray.length-1; i >= 0; i--){
        reversedString += numAsArray[i]; 
    }
    
    if(reversedString == numAsString){
        return true;
    }else{
        return false;
    }
}

console.log(largestPalindromeProduct());