// Array 数组:
// 1. 创建: new 或者 字面量
// 2. 数组中数据的数据类型无限制

let arr1 = new Array(); // 空数组
let arr2 = [];
let arr3 = [1, 2, 3, 4, 5, "pink", true];
console.log(arr3)

// Array 数组:
// 3. 取数 array[index] index 0开始
// 4. 遍历数组: 循环！
// 5. 数组转换为分割字符串 

//
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i], arr3.length);
}

//
let array = [2, 6, 1, 77, 52, 25, 7];
let max_num = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max_num) {
        max_num = array[i];
    }
}
console.log(max_num);

//
let a = ["red", "green", "blue"];
let str = "";
for (let i = 0; i < a.length; i++) {
    str = str + a[i] + "|"
}
console.log(str)

// Array 数组:
// 6. 新增新元素: 
//  1) length属性可读写 arr.length = 5; 实现扩容，扩充的元素都为 undefined
//  2) 追加或者替换数组元素: arr[newindex] = 3;
//  3) 不要直接给数组名赋值，否则会丢失数据
let arr = [1, 2, 3];
arr[3] = 4;
console.log(arr);

//
let ar = [];
ar.length = 12;
for (let i = 0; i < ar.length; i++) {
    ar[i] = i + 1;
}
console.log(ar);

// 
let ay = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
let t = [];
for (let i = 0; i < ay.length; i++) {
    if (ay[i] >= 10) {
        t[t.length] = ay[i]; // 新引入一个变量j, 每次赋值完 j 加 1
    }
}
console.log(t)

t = [];
j = 0;
for (let i = 0; i < ay.length; i++) {
    if (ay[i] >= 10) {
        t[j] = ay[i]; // 新引入一个变量j, 每次赋值完 j 加 1
        j++;
    }
}
console.log(t)

// Array 数组:
// 7. 删除数组元素
// 8. 反转数组顺序

// 7.
arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
temp = [];
j = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        continue;
    }
    temp[temp.length] = arr[i];
}
console.log(temp)

// 8. Reverse
arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
temp = [];
temp.length = arr.length;
for (let i = 0; i < arr.length; i++) {
    temp[arr.length - 1 - i] = arr[i];
}
console.log(temp)
// 8. 反着取数组元素 i--
temp = [];
for (let i = arr.length - 1; i >= 0; i--) {
    temp[temp.length] = arr[i];
}
console.log(temp);

// Array 数组:
// 9. 数组排序: arr.sort()

// 冒泡排序
arr = [5, 4, 3, 2, 1];
temp = 0;
for (let i = 1; i <= arr.length - 1; i++) { //控制交换的对象 或者 交换的轮数
    for (let j = 0; j <= arr.length - 1 - i; j++) { // 控制每一轮交换的次数，最大次数与 数组长度 和 i 值有关
        if (arr[j] > arr[j + 1]) {
            temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr)

// Array 数组:
// 数组操作: 增 删 改 查
// 查 array[index]
// 改 array[index] = value
// 增 arr.push(新增内容)， arr.unshift(新增的内容)
// 删 arr.pop(), arr.shift(), arr.splice(操作的下标，删除的个数)

// .push() 将一个或多个元素加到末尾，并返回数组的新长度
// .unshift() 将一个或多个元素加到开头，并返回数组的新长度
// .pop() 删除数组中的最后一个元素，并返回该元素的值，一次只能删除一个
// .shift() 删除第一个元素, 并返回该元素的值，一次只能删除一个
// .splice(index,count) 指定要删除的元素,从索引号位置开始删除count个元素，非常常用！！！

console.log(arr.push(12)) // 返回值是 1 
console.log(arr)

console.log(arr.push(1, 2)) // 返回值是 3
console.log(arr)

console.log(arr.push([1, 2])) // 返回值是 4
console.log(arr)

console.log(arr.unshift(3, 4))
console.log(arr)

let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] < 10) {
        newArr.push(arr[i])
    }
}
console.log(newArr)

console.log(arr.pop())
console.log(arr.shift())

console.log(arr.splice(1, 1))