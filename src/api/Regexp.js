/**
 * 1. test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
 * RegExp.prototype.test()
 * regexObj.test(str)
 * 参数str: 用来与正则表达式匹配的字符串
 * 返回值: 如果正则表达式与指定的字符串匹配 ，返回true；否则false。
 */

// 1.1 当没有设置全局标志的正则使用test()
// 一个简单的例子，测试 "hello" 是否包含在字符串的最开始，返回布尔值
let str = 'hello world'
let result = /^hello/.test(str)
console.log(result) // true

// 1.2 当设置全局标志的正则使用test()
// 如果正则表达式设置了全局标志，test() 的执行会改变正则表达式   lastIndex属性。连续的执行test()方法，后续的执行将会从 lastIndex 处开始匹配字符串，(exec() 同样改变正则本身的 lastIndex属性值).
let regx = /foo/g
console.log(regx.lastIndex) // 0
console.log(regx.test('foo')) // true

console.log(regx.lastIndex) // 3
console.log(regx.test('foo')) // false