let date = new Date()
console.log(date)

let year = date.getFullYear()
var month = date.getMonth()
var day = date.getDate()

var week = date.getDay()
console.log(week)

var hour = date.getHours()
var minutes = date.getMinutes()
let second = date.getSeconds()
console.log(year, month, day, hour, minutes, second)

// 时间格式化 yyyy-MM-dd
function formatDate(date) {
  const data = new Date(date)
  const year = data.getFullYear()
  const month = data.getMonth() + 1
  const day = data.getDate()
  const hour = data.getHours()
  const minu = data.getMinutes()
  const second = data.getSeconds()

  const formatMonth = month < 10 ? `0${month}` : month
  const formatDay = day < 10 ? `0${day}` : day
  return `${year}-${formatMonth}-${formatDay} ${hour}:${minu}:${second}`
}
const date = formatDate(new Date())
console.log(date)

// 自定义任意格式-版本1
Date.prototype.formatDate = function (fmt) {
  const regx = /(y+)/
  if (regx.test(fmt)) {
    const oldStr = RegExp.$1
    const newStr = this.getFullYear()
      .toString()
      .substring(4 - oldStr.length)
    fmt = fmt.replace(oldStr, newStr)
  }
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
  }
  for (var k in o) {
    const reg = new RegExp(`(${k})`)
    if (reg.test(fmt)) {
      const oldSubStr = RegExp.$1
      const newSubStr = o[k] < 10 ? `0${o[k]}` : o[k]
      fmt = fmt.replace(oldSubStr, newSubStr)
    }
  }
  return fmt
}

// 自定义任意格式-版本2
Date.prototype.formatDate = function (fmt) {
  const regx = /(y+)/
  fmt = fmt.replace(regx, () => {
    const newStr = this.getFullYear()
      .toString()
      .substring(4 - RegExp.$1.length)
    return newStr
  })

  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
  }
  for (var k in o) {
    const reg = new RegExp(`(${k})`)
    const newSubStr = o[k] < 10 ? `0${o[k]}` : o[k]
    fmt = fmt.replace(reg, newSubStr)
  }
  return fmt
}

const dateStr1 = new Date().formatDate('yyyy-MM-dd hh:mm:ss')
const dateStr2 = new Date().formatDate('yyyy.MM.dd hh:mm:ss')
const dateStr3 = new Date().formatDate('yyyy年MM月dd日 hh:mm:ss')
const dateStr4 = new Date().formatDate('yy年MM月dd日 hh:mm:ss')
console.log(dateStr1, dateStr2, dateStr3, dateStr4)

// 获取AddDayCount天后的日期，例如 前天GetDateStr(-2)、昨天GetDateStr(-1)、今天GetDateStr(0)、明天GetDateStr(1)、后天GetDateStr(3)的日期
function GetDateStr(AddDayCount) {
  var dd = new Date()
  dd.setDate(dd.getDate() + AddDayCount) //获取AddDayCount天后的日期
  var y = dd.getFullYear()
  var m = dd.getMonth() + 1 //获取当前月份的日期
  var d = dd.getDate()
  return y + '-' + m + '-' + d
}
console.log('前天：' + GetDateStr(-2))
console.log('昨天：' + GetDateStr(-1))
console.log('今天：' + GetDateStr(0))
console.log('明天：' + GetDateStr(1))
console.log('后天：' + GetDateStr(2))
console.log('大后天：' + GetDateStr(3))

console.log(Date.parse('2021-07-01'))
