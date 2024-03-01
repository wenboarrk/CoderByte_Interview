// If Else
// if () {}
// else if () {}
// else {}

// Leap year
var year = prompt("Enter a year: ");
var prove;
if (year%4==0) {
    if (year%100==0) {
        if (year%400==0) {
            prove = true;
        }
        else {
            prove = false;
        }
    }
    else {
        prove = not;
    }
}
else {
    prove = true;
}

console.log(prove);

if (year%4==0 && year%100==0 || year%400 == 0) {
}
else {
    prove = true;
}

// 三元运算符组成的表达式: ?:三元表达式
// var 返回值 = 条件 ? 表达式1 : 表达式2 （条件为真则执行表达式1，条件为假则执行表达式2）
var num = 5;
var result = num > 10 ? "Ja" : "Nein";

var num = prompt("Enter a number: ");
var result = num < 10 ? "0" + num : num;
console.log(result);


// Switch Case: 用于Case比较确定的情况下，效率会更高，有判断范围时ifelse更合适
// 1. 一般是变量有一系列可以匹配的值
// 2. break 的使用
// 3. 判断是 全等 的结果!!
var fruit = prompt("Enter a fruit: ");
switch (fruit) {
    case "banana":
        alert("23");
        break;
    case "apple":
        alert("25");
        break;
    case "pear":
        alert("26");
        break;
    default:
        alert("Sorry, no such fruit.");
        // break;
}
















