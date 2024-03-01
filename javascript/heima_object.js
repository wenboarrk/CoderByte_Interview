// 对象 Object
// 无序的数据集合，数组是有序的数据集合
// 描述对象信息，动态用function，静态用number,string, array, boolean
let objname = new Object()
let obj1 = {
    name: "Wenbo",
    age: 29,
    gender: "weiblich",
    "opt": "we"
}
console.log(obj1)

// 对象的 增 删 改 查
// 查: 对象.属性, or 对象["属性"]
// 改: 对象.属性 = 值
// 增: 对象.新属性名 = 新值
// 删: delete 对象名.属性名
obj1.price = "20"
console.log(obj1)
obj1.gender = "mannlich"
console.log(obj1.name)
delete obj1.price
console.log(obj1["opt"])
console.log(obj1["age"])

// 对象有 属性 和 方法:
// Methods: 匿名函数, 调用方法: 对象名.方法名
let person = {
    name: "andy",
    // Methods:
    sayHi: function (x, y) {
        // console.log("Hi")
        console.log(x + y)
    }
}
person.sayHi(1, 2)

// 遍历对象: 
// for-in syntax
let arr = [1, 2, 3, 4, 5, 6]
for (let k in arr) {
    console.log(k) // 注意: 输出结果为字符串类型！！！！！！
    // console.log(arr[k])
}

for (let key in person) {
    console.log(key)
    console.log(person[key]) // key 为 字符串
}

// 数组对象:
let students = [
    { name: "xiaoming", age: 18, gender: "male", hometown: "Hebei" },
    { name: "gang", age: 17, gender: "female", hometown: "Henan" },
    { name: "wen", age: 16, gender: "female", hometown: "Shanghai" },
    { name: "daniel", age: 19, gender: "male", hometown: "Beijing" },
]
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

// 内置对象:
// 如 console, document: console.log(), document.write()
// 常用的 Math: 提供了一系列做数学运算的方法
// random 生成 0 到 1 之间的随机数，包含0 不包含1
// cell 向上取整
// floor 向下取整
// max
// min
// pow 幂运算
// abs 绝对值
