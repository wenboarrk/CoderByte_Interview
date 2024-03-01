// 数据类型: js动态语言类型，即数据类型是只有在程序运行时，根据等号右边的值确定的, 数据类型是可变的
// js数据类型有两类
// 1. 基本数据类型 Number, String, Boolean, Undefined（声明了变量但没有给值），Null (空值))
// 2. 引用数据类型 Object 
let num = 10; // This is an number
let s = "hello"; // This is a string
num = "10"; // num is now string

// Number数字型
// let num1 = 010; //如果数字前边加0 表示八进制， 结果为8
// let num2 = 0x9; //0xa //数字前边加0x 表示十六进制 0~9 a~f #ffffff
// alert(Number.MAX_VALUE);
// alert(Number.MIN_VALUE); 
// alert(Infinity); // alert(Numer.MAX_VALUE*2) // 无穷大
// alert(-Infinity); // alert(-Numer.MAX_VALUE*2)  // 无穷小
// alert(NaN); // 非数值 log(""-10)

let n = 21.2;
let m = 10;
console.log(isNaN(12));

let usrAge = 12;
let usrName = "Pink";
console.log(isNaN(usrAge));
console.log(isNaN(usrName));

// String 字符串型
// 1. 字符串转义符 \b (blank空格), \t (tab), \' \"" \\斜杠 \n (newline换行)
// 2. 字符串长度和拼接 strMsg.length, 字符串 + 任何类型 = 拼接后的新字符串 -- 数值相加，字符相连 ！！！！
//    字符串中引入变量， '+letname+'

str = "I am \"Wenbo\"\nhello everyone!"
console.log(str)

let strMsg = "Hello everyone";
let strMsg1 = strMsg + 2;
let strMsg2 = strMsg + true;
console.log(strMsg1);
console.log(strMsg2);
console.log(12 + 12);
console.log("12" + 12); // 1212
console.log(strMsg1.length);

let age = 18;
console.log("I am " + age + " years old.")

// Boolean
// 1. let n = true; false
// 2. 参与加法运算时 true = 1, false = 0, true + 1 // 2

// Undefined
// 1. let un = undefined; // Undefined, let un; // undefined
// 2. 相加操作 Undefined + 1 // NaN, Undefined + "pink" // "Undefinedpink" 

// Null
// 1. 相加操作 null + 1 // 1, null + "pink" // "nullpink"

// 查询数据类型
console.log(typeof age); // number
console.log(typeof "hello"); // string
flag = true;
console.log(typeof flag);
flag = null;
console.log(typeof flag); // object !!! null的数据类型属于object

// prompt 取来的值是字符串
let name = prompt("Enter your name: ");
console.log(name);
console.log(typeof name); // string

//字面量: 即代码中固定值的表示法，字面量表示如何表达这个值，数字(8,9)，字符串('wenbo')，布尔字面量(true,false)

//数据类型转换:
// 1. to String:
// a) toString()
// b) String() 强制转换
// c) + 拼接字符串 ！！最常用，隐式转换！！！因为会先把num转换成字符串
num = 10;
let str = num.toString();
console.log(num)
console.log(typeof str)
console.log(String(num))
console.log(num + "")
console.log(typeof (num + ""))

//数据类型转换:
// 2. to Number:
// a) parseInt(string): parseInt("74") 且可以取整
// b) parseFloat(string): parseFloat("78.21")
// c) Number(string): Number("12")
// d) - * / 隐式转换！！!: "12"-0, "123"-"120"
console.log(parseInt("74"))
console.log(parseInt("74.21"))
console.log(parseInt("74.21px"))
console.log(parseInt("74.21rem"))
console.log(parseInt("px74.21rem")) // NaN
console.log(parseFloat("78.21"))
console.log(parseFloat("78.21px"))
console.log(parseFloat("rem78.21"))
console.log(Number("12"))
console.log("12" - 0)
console.log("123" - "120") // 3
console.log("123" * 1) // 123

let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter another number: ");
let sum12 = num1 * 1 + num2 * 1;
// sum12 = parseFloat(num1) + parseFloat(num2);
alert("The sum of two numbers is " + sum12 + ".");

//数据类型转换:
// 3. to Boolean: 其他类型转换成布尔型 Boolean()
// a) 代表空的，或否定的值会被转换为false，如 0, ""，NaN, null, undefined
// b) 其余值都会被转换为 true
console.log(Boolean(" ")) // true
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(12))
console.log(Boolean("miao"))


