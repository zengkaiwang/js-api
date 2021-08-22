/**
 * replace()
 */
// replace() 中使用了正则表达式及忽略大小写标示
let str = 'I am Wzk'
let newStr = str.replace(/wzk/i, 'Scaler')
console.log(newStr)

let str = 'I am Wzk wzk wZk'
let newStr = str.replace(/wzk/gi, 'Scaler')
console.log(newStr)

let str = 'wzk scaler'
var regx = /(\w+)\s(\w+)/
var newStr = str.replace(regx, '$2, $1')
console.log(newStr)

// 驼峰变中线连接
function format(str) {
  return str.replace(/[A-Z]/g, (match) => {
    return '-' + match.toLowerCase()
  })
}
var newStr = format('newGiftList')
console.log(newStr)

/**
 * 处理日期格式: 自定义任意格式
 * replace()
 * RegExp.$1
 * substr()
 */

Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds(),
    // 毫秒
  }

  const regx = /(y+)/
  if (regx.test(fmt)) {
    const oldSubStr = RegExp.$1
    const newSubStr = (this.getFullYear() + '').substr(4 - oldSubStr.length)
    fmt = fmt.replace(oldSubStr, newSubStr)
  }

  for (var k in o) {
    const regx2 = new RegExp('(' + k + ')')
    if (regx2.test(fmt)) {
      const oldStr = RegExp.$1
      const newStr = oldStr.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      // const newStr = oldStr.length == 1 ? o[k] : o[k] < 10 ? '0' + o[k] : o[k]
      fmt = fmt.replace(oldStr, newStr)
    }
  }

  return fmt
}

let str = new Date().Format('yyyy-MM-dd hh:mm')
console.log(str)

/**
 * RegExp.$1
 */
var r = /^(\d{4})-(\d{1,2})-(\d{1,2})$/ //正则表达式 匹配出生日期(简单匹配)
r.exec('1985-10-15')
s1 = RegExp.$1
s2 = RegExp.$2
s3 = RegExp.$3
console.log(s1 + ' ' + s2 + ' ' + s3) //结果为1985 10 15
