/**
 * new Array()
 * 语法: new Array(ele0, ele1[, ...[, eleN]])
 * 语法: new Array(arrayLength)
 */
var arr = new Array(1, 2)
console.log(arr) // [ 1, 2 ]

var arr2 = new Array(2)
console.log(arr2) // [ <2 empty items> ] 此时是个空数组
arr2.fill(1)
console.log(arr2) // [ 1, 1 ]

var arr3 = new Array('2')
console.log(arr3) // [ '2' ]

/**
 * fill()
 */
var arr = new Array(3)
arr.fill(0)
console.log(arr) // [ 0, 0, 0 ]

/**
 * sort()
 * 对数组进行排序
 * 入参: 函数
 * 返回值: 排序后的数组
 */
let array = ['31', '1', '2', '1000']
array.sort((a, b) => a - b) // 升序
console.log(array) // [ '1', '2', '31', '1000' ]

array.sort((a, b) => b - a) // 降序
console.log(array) // [ '1000', '31', '2', '1' ]

const array1 = [1, 30, 4, 21, 100000]
array1.sort() // 默认排序: 元素按照转换为的字符串的各个字符的Unicode位点进行排序。
console.log(array1) // [ 1, 100000, 21, 30, 4 ]

const arr2 = ['b', 'a', 'c', 'ba']
arr2.sort()
console.log(arr2) // [ 'a', 'b', 'ba', 'c' ]

/**
 * 1\ splice()
 * 可以删除元素
 * 可以替换元素
 * 可以添加元素
 * 入参: splice(start, deleteCount, item, item, ...)
 * 返回值: 以数组的形式返回被修改的内容
 * 此方法会改变原数组
 */
const arr = [0, 1, 2, 3]
arr.splice(2, 0, 'wzk') // 添加
console.log(arr) // [ 0, 1, 'wzk', 2, 3 ]

arr.splice(2, 1) // 删除
console.log(arr)

arr.splice(2, 1, 'wzk') // 替换
console.log(arr)

arr.splice(4, 0, ...['w', 'z', 'k']) // 合并两个数组
console.log(arr)
