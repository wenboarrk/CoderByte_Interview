// Task1 
// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, 
// and return the number of valid combinations that can be formed with num pairs of parentheses. For example, 
// if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: 
// ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, 
// so your program should return 5.

function BracketCombinations(num) {
    let result = cal_Cn(num)

    // code goes here  
    return result;

}

function factorial(n) { // calculate n!
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result
}

function cal_Cn(n) { // Cn = (2n)!/((n+1)!*n!)
    let Cn = factorial(2 * n) / (factorial(n + 1) * factorial(n))
    return Cn
}

// keep this function call here 
console.log(BracketCombinations(3));