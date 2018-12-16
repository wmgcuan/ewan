/*
格式：\033[背景色编号;字色编号m + content + suffix

字色编号：30黑，31红，32绿，33黄，34蓝，35紫，36深绿，37白色
背景编号：40黑，41红，42绿，43黄，44蓝，45紫，46深绿，47白色

\033[0m 关闭所有属性
\033[1m 设置高亮度
\033[4m 下划线
\033[5m 闪烁
\033[7m 反显
\033[8m 消隐
\033[nA 光标上移n行
\033[nB 光标下移n行
\033[nC 光标右移n列
\033[nD 光标左移n列
\033[y;xH 设置光标位置（y列x行）
\033[2J 清屏
\033[K 清除从光标到行尾的内容
*/
var colorMap = {
  green: ['\033[42;30m', '\033[32m'],
  blue: ['\033[44;30m', '\033[34m'],
  cyan: ['\033[46;30m', '\033[36m'],     //青色
  red: ['\033[41;30m', '\033[31m'],
  magenta: ['\033[45;30m', '\033[35m'],  //品红
  yellow: ['\033[43;30m', '\033[33m'],
  grey: ['\033[49;5;30m', '\033[90m'],   //灰色
  white: ['\033[47;30m', '\033[37m'],    //白色
  black: ['\033[40;30m', '\033[30m'],    //黑色
  bold: ['\033[1m', '\033[22m'],         //加粗
  italic: ['\033[3m', '\033[23m'],       //斜体
  underline: ['\033[4m', '\033[24m'],    //下划线
  inverse: ['\033[7m', '\033[27m'],      //颠倒
  strikethrough: ['\033[9m', '\033[29m'] //加删除线
}

function handle (args, opt) {
  const prefix = opt.color ? colorMap[opt.color] : colorMap['white'],
    suffix = opt.suffix || '\033[0m'
  const _args = Array.prototype.slice.apply(args)
  let str = opt.icon ? prefix[0] + ' ' + opt.icon + ' ' + suffix + ' ' : ''

  _args.forEach(element => {
    str += prefix[1] + element + suffix
  })
  return str
}

console.success = function () {
  console.log(handle(arguments, { color: 'green', icon: '√' }))
}
console.info = function () {
  console.log(handle(arguments, { color: 'cyan', icon: ':' }))
}
console.warn = function () {
  console.log(handle(arguments, { color: 'yellow', icon: '!' }))
}
console.error = function () {
  console.log(handle(arguments, { color: 'red', icon: '✕' }))
}
console.color = function () {
  let _args = Array.prototype.slice.apply(arguments),
    options = _args.shift(),
    opts = options
  if (options instanceof Array) {
    opts = {}
    opts.color = (options.length > 0 && options[0]) || ''
    opts.icon = (options.length > 1 && options[1]) || ''
    opts.suffix = (options.length > 2 && options[2]) || ''
  }
  console.log(handle(_args, opts))
}