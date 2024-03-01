// 变量的使用， 先声明， 后赋值
// 只声明不赋值，结果为undefined, 未声明直接赋值，会变成全局变量
let age = 18;
let name = prompt("Enter yout name: ")

let age1 = 12,
  name1 = "wenbo",
  birthyear = 1994;
console.log(age1);
console.log(birthyear)

//交换两个变量的值
let temp0;
let apple1 = "1";
let apple2 = "2";

temp = apple1;
apple1 = apple2;
apple2 = temp;


// var 和 let 区别
//let a = 18, uname = "wenbo"; // let 专门用于声明变量
// var 的声明，可以先使用后声明，不合理
// 声明过的变量可以重复声明，不合理
// 变量提升，全局变量，没有块级作用
let a = 18;
let uname = "Wenbo";
let uName = prompt("Enter your name: ");
a = 19;
alert(a, uname);

let n1 = 10;
let n2 = 18;
let temp
temp = n1;
n1 = n2;
n2 = temp;
console.log(n1, n2)

// 常量
// const 声明，永远不会改变, 不允许重新赋值，声明时必须赋值，初始化
// 常量一般都大写

const G = 9.8;
const PI = 3.14;









