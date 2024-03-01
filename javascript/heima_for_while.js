// for loops:
// 用Debug模式查看循环执行过程

for (let i = 1; i <= 4; ++i) {
    console.log("hello");
}

for (let j = 1; j <= 4; j++) {
    console.log("hello");
}

for (let age = 1; age <= 20; age++) {
    console.log("The person is " + age + " years old.");
}

let result = 0;
let result1 = 0;
let result2 = 0;
let result3 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        result1 += i;
    }

    if (i % 2 == 0) {
        result2 += i;
    } else if (i % 2 == 1) {
        result3 += i;
    }
    result += i;
}
console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)


let num = prompt("Number of people: ");
let total = 0;
let score = 0;
for (let i = 1; i <= num; i++) {
    score = prompt("Score: ");
    total += parseFloat(score);
}
console.log(total);
console.log(total / num);

// Task
let str = ""
for (let i = 1; i <= 5; i++) {
    str = str + "*";
}
console.log(str)

// Task
str = "";
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }
    str += "\n";
}
console.log(str);

// Task
let rows = 6;
let cols = 5;
str = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
        str = str + "*";
    }
    str += "\n";
}
console.log(str);

//Task
str = "";
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        str = str + `${i}*${j}=${i * j}\t`; //str = str + i + "*" + j + "=" + i*j 
    }
    str = str + "\n";
}
console.log(str)


// While Loops:
// 用Debug模式查看循环执行过程
num = 1;
while (num <= 4) {
    console.log(num);
    num++;
}

str = "";
while (str !== "I love you") {
    str = prompt("Enter: ");
}
// if(str=="I love you"){
alert("I love you too.");
// }

// Do While Loops: 至少执行一次
// 先执行一次循环体，再判断条件，如果满足继续做下一次，如果不满足结束循环
// 用Debug模式查看循环执行过程
let i = 1;
do {
    console.log("hello");
    i++;
}
while (i <= 5)

result = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        continue;
    }
    result += i;
}
console.log(result)

result = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        continue;
    }
    result += i;
}
console.log(result)
