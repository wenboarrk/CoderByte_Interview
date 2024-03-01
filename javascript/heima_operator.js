// 运算符
// 1. +-*/% 注意不要直接判断两个浮点数是否相等！！！
//    自递增 递减运算符（可前置可后置，必须和变量配合使用) (++num) == (num= num+1) 开发时后置递增更常用，并独占一行，num++

let num1 = 0.1 + 0.2;
let num2 = 2 + 3;
console.log(num1 == 0.3); // false
console.log(num2 == 5); // true

let num3 = 23
console.log(num3++);
console.log(++num3 + 10); //前置运算符 优先级为 先自加1 后返回值
console.log(10 + num3++); //后置运算符 优先级为 先返回值 后自加1
console.log(num3)

let e = 10;
let f = e++ + ++e; // 1) e++ = 10, e = 11, 2) e = 12, ++e = 12
console.log(f);
console.log(e);

// 运算符
// 2. 比较运算符
//  == 默认转换数据类型 
//  === 全等 要求两侧的值和数据类型完全一致 !== 不全等

// 运算符
// 3. 逻辑运算符
//  && || ! (not)
// 短路运算，逻辑终断: 与不选真，或不选假
// &&: 如果表达式1为真则返回表达式2，如果表达式1为假则不再向后运算返回表达式1，123 && 456
// ||: 表达式1为真则返回表达式1，1为假则返回表达式2

console.log(18 == 18)
console.log("18" == 18) // true
console.log("18" != 18) // false
console.log("18" === 18) // false
console.log(18 === 18) // true

console.log(123 && 456)
console.log(0 && 456)
console.log("" && 456)
console.log(0 && 1 + 2 && 456 + 567) // 0
console.log(1 && 1 + 2 && 456 + 567) // 1023 !! 先进行代数计算后进行逻辑运算
console.log(1 && 1 + 0 && 456 + 567) // 1023 !! 先进行代数计算后进行逻辑运算
console.log(1 && 0 + 0 && 456 + 567) // 0 !! 先进行代数计算后进行逻辑运算

console.log(123 || 456) // 123
console.log(0 || 456) // 456
console.log("" || 456) // 456
console.log(0 || 1 + 2 || 456 + 567) // 3
console.log(0 || 1 + 2 || 456 + 567) // 1023 !! 顺序从前到后
console.log(1 || 1 + 2 || 456 + 567) // 1 !! 先进行代数计算后进行逻辑运算
console.log(1 || 1 + 0 || 456 + 567) // 1 !! 先进行代数计算后进行逻辑运算
console.log(1 || 0 + 0 || 456 + 567) // 1 !! 先进行代数计算后进行逻辑运算

let n = 0;
console.log(123 || n++); // 123
console.log(n); // 0 !!!!!!!!!!!!!!!!!!!!! 前边 或 已经短路，后边代码未执行 ！！！！

let m = 0;
console.log(123 && m++); // !!!!!!!!!!!!!!!!!!!! 0 !!!!!!!!!!!!!!
console.log(m); // 1


// 运算符优先级:
// ()
// 一元运算符 ++ -- ! 只需要一个操作数的运算 logic not
// 算数 先乘除后加减 */%+-
// 关系 > <  <= >=
// 相等 == != === !==
// 逻辑 && || 先&&后||
// 赋值 =
// 逗号 ,








