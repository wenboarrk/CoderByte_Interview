// Task 1
// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

// Solution 1: Using regular expression
function CodelandUsernameValidation(str) {
    const pattern = /^[A-Za-z][A-Za-z0-9_]{2,23}[^_]$/;
    return pattern.test(str);
}

function CodelandUsernameValidation_1(str) {
    let strArr = str.toLowerCase().split("")
    const len = strArr.length

    if (len < 4 || len > 25) {
        return false
    }

    if (!(strArr[0] >= "a" && strArr[0]) <= "z") {
        return false
    }

    if (strArr[len - 1] === "_") {
        return false
    }

    for (let i = 1; i <= len - 2; i++) {
        const isNumber = strArr[i] >= 0 && strArr[i] <= 9;
        const isAlphabet = strArr[i] >= "a" && strArr[i] <= "z";
        const isUnderscore = strArr[i] === "_";

        if (!isNumber && !isAlphabet && !isUnderscore) {
            return false
        }
    }

    return true;
}
let teststr = "u__hello_world123" // "aa_"
let result = CodelandUsernameValidation_1(teststr)

// Task 2
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
// the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will 
// represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing 
// the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

function FindIntersection(strArr) {
    let subArr1 = strArr[0].split(", ");
    let subArr2 = strArr[1].split(", ");

    let arr = [];

    if (subArr1.length >= subArr2.length) {
        for (let i = 0; i < subArr1.length; i++) {
            for (const elem of subArr2)
                if (subArr1[i] === elem) {
                    arr.push(subArr1[i])
                }
        }
        return arr.join(",");
    }
    else {
        for (let i = 0; i < subArr2.length; i++) {
            for (const elem of subArr1)
                if (subArr2[i] === elem) {
                    arr.push(subArr2[i])
                }
        }
        return arr.join(",");
    }
}

let input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
result = FindIntersection(input)
console.log(result)

// Better solution
function FindIntersection1(strArr) {
    let subArr1 = strArr[0].split(", ");
    let subArr2 = strArr[1].split(", ");
    let intersection = subArr1.filter(x => subArr2.includes(x));

    // if (intersection.length == 0) {
    //     return 'false';
    // }
    // return intersection.join(",");
    return intersection.length > 0 ? intersection.join(",") : "false";
}

result = FindIntersection1(input)
console.log(result)

//Task: QuestionMark
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, 
// and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. 
// If so, then your program should return the string true, otherwise it should return the string false. 
// If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks 
// between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

function QuestionsMarks(str) {
    let default_result = false;

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            let num1 = parseInt(str[i]);

            for (let j = i + 1; j < str.length; j++) {
                if (!isNaN(str[j])) {
                    let num2 = parseInt(str[j]);

                    if (num1 + num2 === 10) {
                        if ((str.slice(i + 1, j + 1).match(/\?/g)).length !== 3) {
                            return false;
                        }
                        else { return true };
                    }
                }
            }
        }
    }

    return default_result;
}

let test1 = "acc?7??sss?3rr1??????5"
let test2 = "arrb6???4xxbl5???eee5"
let test3 = "aa6?9"
let result1 = QuestionsMarks(test1)
let result2 = QuestionsMarks(test2)
let result3 = QuestionsMarks(test3)
console.log(result1, result2, result3)

// Better Solution
function QuestionsMarks1(str) {
    let matches = str.match(/\d[\w\?]*?\d/g);
    if (!matches) return false;

    let result = false;

    for (let match of matches) {
        if (Number(match[0]) + Number(match[match.length - 1]) === 10) {
            // count the numbers of ?'s in the substring between two numbers 
            if (match.split('').filter(char => char === '?').length === 3) {
                result = true;
            } else {
                result = false;
            }
        }
    }

    return result;
}

test1 = "acc?7??sss?3rr1??????5"
test2 = "arrb6???4xxbl5???eee5"
test3 = "aa6?9"
result1 = QuestionsMarks1(test1)
result2 = QuestionsMarks1(test2)
result3 = QuestionsMarks1(test3)
console.log(result1, result2, result3)


// Task: Longest Word
function LongestWord(sen) {
    let strArr = sen.split(" ");
    let arr = [];
    for (const str of strArr) {
        // arr.push(str.match(/[A-Za-z]/g).join("")) // Better solution: str = str.replace(/[^a-zA-Z0-9 ]/g, '');
        arr.push(str.replace(/[^w ]/g, ''));
    }
    let longest = arr[0];

    for (const str of arr) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    // code goes here  
    return longest;

}

teststr = "Hello everyone! I love the world, anyway."
result = LongestWord(teststr)


function GroupTotals(strArr) {
    let obj = {};
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i][0] in obj) {
            obj[strArr[i].split(":")[0]] += Number(strArr[i].split(":")[1])
        }
        else {
            // obj[key] = value 
            obj[strArr[i].split(":")[0]] = Number(strArr[i].split(":")[1])
        }
    }

    // sort object by keys
    let sorted_obj = {};
    keys = Object.keys(obj);
    keys.sort();
    for (let i = 0; i < keys.length; i++) {
        sorted_obj[keys[i]] = obj[keys[i]];
    }

    // code goes here  
    let result = [];
    for (let key in sorted_obj) {
        if (sorted_obj[key] !== 0) {
            result.push(key + ":" + sorted_obj[key]);
        }
    }
    return result.join(",");

}

GroupTotals(["X:-1", "Y:1", "X:-4", "B:3", "X:5"])


function CoinDeterminer(num) {
    var arr = [1, 5, 7, 9, 11];
    var ps = [[]];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
            var subset = ps[j].concat(arr[i]);
            if (subset.reduce(function (pv, v) { return pv + v; }) == num)
                return subset.length;
            else
                ps.push(subset)
        }
    }

    var divTimes = []; leastDivTimes = 0;
    for (var i = 0; i < arr.length; i++) {
        var n = arr[i];
        var rem = num % n;
        var dividedTimes = parseInt(num / n);
        if (rem == 0) {
            divTimes.push(dividedTimes);
        }
        else if (arr.indexOf(rem) != -1) {
            divTimes.push(dividedTimes + 1);
        }
    }

    return divTimes.sort(function (a, b) { return b - a; }).pop();
}

CoinDeterminer(25);


function CoinDeterminer1(num) {
    // Coins available
    const coins = [1, 5, 7, 9, 11];

    // Initialize dp array where dp[i] will store the minimum number of coins needed for amount i
    let dp = new Array(num + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 coins are needed to make the amount 0

    // Build up the dp array
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    // The answer will be in dp[num]
    return dp[num];
}


function CoinDeterminer2(num) {
    let coins = [1, 5, 7, 9, 11];

    let result = new Array(num + 1).fill(Infinity);
    result[0] = 0;

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j < coins.length; j++) {
            result = Math.min(result, result[i - coins[j]] + 1)
        }
        if (coins[i] <= num) {
            result[i] = Math.min(result[i], result[i - coins[j]] + 1);
        }
    }

    // code goes here  
    return result[num];

}

// Example usage
console.log(CoinDeterminer1(16)); // Output: 2 (9 + 7)
console.log(CoinDeterminer1(25)); // Output: 3 (9 + 9 + 7 or 11 + 9 + 5)



const https = require('https');


https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {

    let rawData = '';
    resp.on("data", (data) => {
        rawData += data;
    })

    // Once reveived all data, parse it and do the processing of cleaning
    resp.on("end", () => {
        try {
            let jsonData = JSON.parse(rawData);
            let count = 0;

            function recurse(obj) {
                let data;
                for (let key in obj) {
                    data = obj[key];
                    if (data == "N/A" || data == "-" || data == "" || data === null || typeof data == "undefined") {
                        delete obj[key];
                        count++;
                    }
                    else if (data instanceof Object) {
                        data = recurse(data);
                    }
                }
            }

            recurse(jsonData);
            jsonData.items_removed = count;
            console.log(JSON.stringify(jsonData));

        } catch (e) {
            console.log("Error: ", e)
        }
    })

    //}
    //catch (e) {
    //  console.error("Error when parsing JSON: ", e)
    //}
    //}

    //data => {
    //const obj = cleanObj(JSON.parse(data.toString()));
    //console.log(JSON.stringify({...obj, items_removed}))
    //})

    // parse json data here...

    // Remove all keys that have values of N/A, -, or empty strings. 

});