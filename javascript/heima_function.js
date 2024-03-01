function get_sum(param1 = 0, param2 = 0) { // 参数有默认值，可以使程序更加严谨
  let sum = 0
  for (let i = param1; i <= param2; i++) {
    sum += i
  }
  return sum
}

console.log(get_sum())
result = get_sum(1, 100)
console.log(result)

console.log(get_sum(1)) // 只传入了一个参数，结果为NaN !!!!

function get_sum_of(arr = []) { // 参数有默认值，可以使程序更加严谨
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum // return后面的数据不要换行写!!!
}

let arr = [1, 2, 3, 4, 5, 7, 8, 9]
let result = get_sum_of(arr)
console.log(result)

function get_max_min(arr = []) {
  let max = arr[0]
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return [max, min] // 返回的是数组
}

let newArr = get_max_min(arr)
console.log(`The maximum is ${newArr[0]}, the minimum is ${newArr[1]}.`)


// 作用域
// 如果函数内部，变量没有声明，直接赋值，则这个变量当全局变量来看 !!!!!!!!! 强烈不允许
// 函数内部的形参 可以看作是局部变量
function fn() {
  num = 10
}
fn()
console.log(num)

let num = 20
function fn() {
  num = 10
}
fn()
console.log(num) // 程序乱套了

let num1 = 20
function fn() {
  let num1 = 10
}
fn()
console.log(num1) // 程序乱套了

// 从当前作用域进行向上进行查找，如果没找到，则为undefined !!!!!!! 就近原则 --> 作用域链
let n = 20
function fn() {
  let n = 10
  function fun() {
    let n = 30
    console.log(n) //30
  }
  fun()
}
// fn()

// let n = 20
// function fn() {
//   let n = 10
//   function fun() {
//     console.log(n) // 10
//   }
//  fun()
// }
// fn()

// let n = 20
// function fn() {
//   function fun() {
//     console.log(n) // 20
//   }
// fun()
// }
// fn()

// 匿名函数 function() {} (与具名函数不同，该函数没有名称！！！)
// 1. 函数表达式: 将函数赋值给一个变量，并且通过变量名进行调用 
//    函数表达式 和 具名函数 的不同:
//    函数表达式必须 先声明 后调用，具名函数只要定义后可以任何地方使用
// 2. 立即执行函数，避免全局变量之间的污染，立即执行，不需调用，实际已经被调用了
//    两种写法: 1. (function flexible(x,y){return x+y})(1,2);  2. (function getSum(x,y){return x+y}(1,2)); 结尾一定要加分号结束; 立即执行函数可加函数名
//    即不担心用户的变量名和源代码变量名有冲突，因为全部都包裹在()里
let myfunc = function (x, y) {
  console.log(x + y)
}
myfunc(2, 3)

  (function (x, y) {
    return x + y
  })(1, 2);

(function (x, y) {
  return x + y
}(1, 2));

// Time format transformation:
let seconds = prompt("Enter a time [s]: ")
function calTime(seconds) {
  let h = parseInt(seconds / 60 / 60 % 24);
  let m = parseInt(seconds / 60 % 60);
  let s = parseInt(seconds % 60);
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  return str = `The time takes ${h} h ${m} min ${s} seconds.`
}
str = calTime(seconds)
alert(str)






