### ewan install --toolname docs

### ewan install --toolname rollup

1. 写入.rollup.config.js
2. npm install rollup --save-dev
3. 往 package.json 里写入 scripts['run:rollup'] = 'rollup -c'

### 创建[ewan]命令

1. npm init

2. /package.json

   ```js
   "bin": {
       "ewan": "./bin/ewan.js"
   }
   ```

3. /bin/ewan.js

   ```js
   #! /usr/bin/env node
   console.log('hello')
   ```

4. \$ node bin/ewan.js

   能够看到输出了 hello，当然这不是我们想要的结果，我们是要直接运行 ewan 命令

5. 运行 ewan 命令<br>

   没有全局安装之前可在当前开发目录 npm link 作测试运行,退出：npm unlink<br>
   `$ npm link`<br>
   `$ ewan`

### 实现[$ ewan]创建 demo 结构

1. 创建一个完整的结构 /structure 用于拷贝

2. 创建结构的方法放在 /lib 下

   > /lib/generateStructure.js

   ```js
   var Promise = require('bluebird'), // 异步支持：npm install bluebird --save
     fs = Promise.promisifyAll(require('fs-extra')), // 文件拷贝：npm install fs-extra --save
     root = __dirname.replace(/ewan\/lib/, 'ewan/') // 全局安装时structure要定位到/usr/local/lib/node_modules/ewan

   function generateStructure(project) {
     // 将structure下的内容复制到project(String)文件夹下
     return fs
       .copyAsync(root + 'structure', project, { clobber: true })
       .then(function(err) {
         if (err) return console.error(err)
       })
   }

   module.exports = generateStructure
   ```

3. /bin/ewan.js

   ```js
   #! /usr/bin/env node
   var gs = require('../lib/generateStructure')
   gs('demo')
   ```

4. `$ ewan`

### 实现[$ ewan demo]创建 demo 结构

1. /bin/ewan.js

   ```js
   #! /usr/bin/env node
   var program = require('commander'), // 参数处理：$ npm install commander --save
     gs = require('../lib/generateStructure')

   program
     .version(require('../package.json').version) // 打印版本号并退出
     .usage('[options] [project name]')
     .parse(process.argv) // 将接收到的参数加入 Commander 的处理管道

   var pname = program.args[0]
   if (!pname) program.help() // 如果未接收到作何参数则返回帮助信息

   gs(pname)
   ```

2. `$ ewan demo`

### 整理创建的结构的内容

- 移除指定模块

  > /lib/delFile.js

  ```js
  var Promise = require('bluebird'),
    fs = Promise.promisifyAll(require('fs-extra'))

  function del(project, files) {
    return files.map(function(item) {
      return fs.removeAsync(project + item)
    })
  }
  function delFile(project, files) {
    return Promise.all([del(project, files)])
  }
  module.exports = delFile
  ```

  > /lib/jadeWithout.js

  ```js
  var Promise = require('bluebird'),
    fs = Promise.promisifyAll(require('fs-extra')),
    del = require('../lib/delFile')

  var files = ['/views/layouts/layout.jade', '/views/index.jade']
  function jadeWithout(project) {
    return Promise.all([del(project, files)]).then(function() {
      return console.log('remove jade success')
    })
  }
  module.exports = jadeWithout
  ```

  > /lib/withoutFile.js

  ```js
  var Promise = require('bluebird')

  function deal(project, outs) {
    return outs.map(function(item) {
      var action = require('../lib/' + item + 'Without')
      return action(project)
    })
  }

  function withoutFile(project, outs) {
    return Promise.all([deal(project, outs)])
  }
  module.exports = withoutFile
  ```

  > /bin/ewan.js

  ```js
  var Promise = require('bluebird'),
    program = require('commander'),
    gs = require('../lib/generateStructure'),
    wf = require('../lib/withoutFile'),
    outs = program.without ? program.without.split(',') : [],
    pname = program.args[0]

  if (!pname) program.help()

  Promise.all([gs(pname)]).then(function() {
    return wf(pname, outs)
  })
  ```

  `$ ewan demo --without jade,sass`

### 安装创建的命令 ewan

1. \$ npm login 或 npm adduser
2. \$ npm publish
3. Usage

```js
$ npm unlink // 删除本地开发做的 ewan 链接
$ npm install ewan -g
$ ewan demo
```

### 交互对话 commander API

声明一个子命令

```js
var program = require('commander') // $ npm install commander --save
program
  .command('install')
  .description('install github project to local')
  .action(function(options) {
    todo()
  })
program.parse(process.argv) //开始解析用户输入的命令
```

```js
var inquirer = require('inquirer') // $ npm install inquirer --save
function todo() {
  let choices = ['aaa', 'bbb', 'ccc', 'dddd']
  let questions = [
    {
      type: 'list',
      name: 'repo',
      message: 'which repo do you want to install?',
      choices
    }
  ]
  // 调用问题
  inquirer.prompt(questions).then(answers => {
    console.log(answers) // 输出最终的答案
  })
}
```

`var program = require('commander') // 命令解析`

|           |                                                                  |
| --------- | ---------------------------------------------------------------- |
| Option()  | 初始化自定义参数对象，设置“关键字”和“描述”                       |
| program() | 初始化命令行参数对象，直接获得命令行输入,返回一个数组或者 string |

| program.                                     | 功能描述                                                                |
| -------------------------------------------- | ----------------------------------------------------------------------- |
| version(版本,选项名)                         | 版本设置 .version('1.0.0','-v, --version')                              |
| command()                                    | 定义命令名称: .command( 'list' )                                        |
| alias()                                      | 定义命令别名                                                            |
| description()                                | 添加命令描述: .description( 'list files in current working directory' ) |
| option("-简,--全 值","描述",修值函数,默认值) | 定义选项: .option("-f,--foo < i>","Integer value for foo",parseInt,0)   |
| arguments()                                  | 预设向 action 传递的参数 .arguments('< cmd>' [env]')                    |
| action()                                     | 注册命令的回调函数,即命令实体 .action(function(cmd,env){ })             |
| parseExpectedArgs()                          | 解析预期参数                                                            |
| allowUnknownOption()                         | 允许命令行未知参数                                                      |
| opts()                                       | 设置参数                                                                |
| usage()                                      | 设置/获取用法                                                           |
| name()                                       | 0                                                                       |
| outputHelp()                                 | 设置展示的 help 信息                                                    |
| help()                                       | 0                                                                       |
| parse()                                      | 解析 process.argv 即用户命令,结果保存在 program.args                    |
| parseOptions()                               | 解析参数                                                                |
| on()                                         | 监听 .on('--help',function(){}) / .command().on('--help',function(){})  |

`var inquirer = require( 'inquirer' ) // 命令行[选择][输入]交互`

```js
let choices = ['aaa', 'bbb', 'ccc', 'dddd']
let questions = [
  {
    type: 'list',
    name: 'repo',
    message: 'which repo do you want to install?',
    choices
  }
]
// 调用问题
inquirer.prompt(questions).then(answers => {
  console.log(answers) // 输出最终的答案
})
```

npm install download-git-repo --save

> download(repository, destination, options, callback)

```js
const downloadGitRepo = require('download-git-repo')
// 把目标项目下载到当前目录下的test下
downloadGitRepo('CavinHuang/node-cli-demo', './test', false, err => {
  console.log(err ? 'SUCCESS' : 'FAIL')
})
```

尖角括号<>（例如<cmd>）表示必需的输入。 方括号（例如[env]）表示可选输入
命令，选项，参数
.option('-o,--optimize','optimize text')
.option('-o,--optimize <opt>','optimize text')
.option('-o,--optimize [opt]','optimize text')

\$ node argv.js -foo 3 --bar=4 -baz
argv[0] =/usr/local/bin/node
argv[1] =/Users/xxxx/Desktop/argv.js
argv[2] =-foo
argv[3] =3
argv[4] =--bar=4
argv[5] =-baz

function executeDemo(input){
return parseInt(input)
}
.option('-d,--demo < i>', 'option test', executeDemo, 'defaultValue')
.option('-d,--demo [i]', 'option test', executeDemo, 'defaultValue')
.option('-d,--demo', 'option test', executeDemo, 'defaultValue')

defaultValue 只有在可选[i]的情况下有效

download = require('download-git repo')
download(repository, destination, options, callback)
download(库地址, 目标文件夹, 下载时携带的参数, callback)
