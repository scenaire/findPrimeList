function findPrimeList(x) {
    //create new Array to store Prime number list
    var primeList = new Array();

    //check if negative number, 0 or 1 which isn't a prime number
    if (x < 2) {return primeList}

    //run for-loop to find that number on index is prime or not by calling findPrime Function
    for (let i=2; i<=x; i++) {
        if (findPrime(i) == true) {
            //if the number is prime then push number in array
            primeList.push(i);
        }
    }
    return primeList;
    
}

function findPrime(num) {

    /*use sqrt for shorten loop
    if number n is not a prime then it can be factor as a x b (like 9 can be factor is 3 x 3)
    so a and b could not be greater than sqrt of n 
    if can't find any factor equal or less than sqrt of n then that number would be a prime number*/

    sqrtNum = Math.round(Math.sqrt(num));

    for(let i = 2; i <= sqrtNum; i++) {
        //since prime number only factor by itself and 1 so if num can divisible by i, i would not be a prime number
        if(num % i === 0) return false;
    } 
    return true;
}

//calling function
console.log(findPrimeList(10));

