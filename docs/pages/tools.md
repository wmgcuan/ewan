# COLORS `./lib/colors.js`

格式：\033[背景色编号;字色编号m + content + suffix<br>

字色编号：30黑，31红，32绿，33黄，34蓝，35紫，36深绿，37白<br>
背景编号：40黑，41红，42绿，43黄，44蓝，45紫，46深绿，47白<br>

green:绿
blue:蓝
cyan:青色
red: 红
magenta:品红
yellow:黄
grey: 灰色
white: 白色
black: 黑色
bold: 加粗
italic: 斜体
underline: 下划线
inverse: 颠倒
strikethrough: 加删除线

\033[0m 关闭所有属性<br>
\033[1m 设置高亮度<br>
\033[4m 下划线<br>
\033[5m 闪烁<br>
\033[7m 反显<br>
\033[8m 消隐<br>
\033[nA 光标上移n行<br>
\033[nB 光标下移n行<br>
\033[nC 光标右移n列<br>
\033[nD 光标左移n列<br>
\033[y;xH 设置光标位置（y列x行）<br>
\033[2J 清屏<br>
\033[K 清除从光标到行尾的内容<br>

![应用效果](./images/console-color.jpg '应用效果')

```js
require('./colors')

console.error('红底黑字error示例\n')
console.warn('黄底黑字warn示例\n')

console.success('绿底黑字success示例\n')
console.info('蓝底黑字info示例\n')
console.list('列表内容')
console.title('请输入正确的项目名')
console.color({ color: 'grey' }, ' > $ ewan start [name]')
console.color({ color: 'grey' }, ' > $ ewan map\n')

console.color(['green', 'DONE'], 'Compiled successfully in 19987ms\n')
console.color({color:'green', icon:'DONE', suffix: '\033[0m'}, 'Compiled successfully in 19987ms\n') 
```



# 柯理化(CURRING) `./lib/curring.js`
**curring.all** 参数累积，统一处理
- shell(arg) => [arg]
- shell(arg) => [arg, arg]
- fn(arg, arg)

**curring.step** 分步处理，结果依赖
- step(stepFn, endFn, initRes) => initRes
- stepFn(initRes, curVal) => preRes
- stepFn(preRes, curVal) => preRes
- endFn(preRes)
```js
const curring = require('../lib/curring')
curring.step(package.depend, package.create, package.body())
      (["babel-runtime", "^6.26.0"], true)
      (["babel-core", "^6.26.4"])
      (["babel-preset-env", "^1.7.0"])()
```


# 日期格式化 `./lib/date-format.js`

- 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符<br> 
- 年(y)可以用 1-4 个占位符<br> 
- 毫秒(S)只能用 1 个占位符(是 1-3 位的数字)<br> 

```js
// (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423  
// (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18    

require('../lib/date-format.js')()

var hash = new Date().format("MMddhhmmss")
```





