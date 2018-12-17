#! /usr/bin/env node

var program = require('commander'),
  inquirer = require('inquirer'),
  config = require('../ewan.config')

require('../lib/colors')





program
  .version(require('../package.json').version, '-v, --version')


program
  .command('install')
  .alias('i')
  .description('安装工具')
  .option('-t,--toolname [i]', '工具名')
  .action(function (options) {
    if (options.toolname) {
      require('./' + options.toolname + '.js')()
    } else {
      selectTool(config.projects, function (name) {
        require('./' + name + '.js')() // 根据不同的命令转到不同的命令处理文件
      })
    }
  })

/* 启动应用
 */
program
  .command('start <name>')
  .description('启动服务')
  .action(function (name) {
    const project = config.projectMap[name]
    if (!project) {
      console.error('请输入正确的项目名')
      console.color({ color: 'grey' }, ' > $ ewan start [name]')
      console.color({ color: 'grey' }, ' > $ ewan map\n')
      return
    }
    var exec = require('child_process').exec(project.start)
    exec.stdout.on('data', function (data) {
      console.color({ color: 'green' }, data)
    })
  })

program
  .command('create-file [type]')
  .description('创建模板文件')
  .option('-p --path [path]')
  .action(function (type, path) {
    path = path.path || './'
    if (type) {
      require('../file')(type, path)
    } else {
      selectTool([
        'webpack.config.js',
        'es5.js',
        'es6.js',
        'package.json',
        '.gitignore',
        'rollup.config.js'], function (name) {
          require('../file')(name, path)
        })
    }
  })

program.parse(process.argv)
var pname = program.args[0]
if (!pname) program.help() // 如果未接收到作何参数则返回帮助信息

function selectTool (choices, handler) {
  let questions = [
    {
      type: 'list',
      name: 'repo',
      message: 'which one do you want to select?',
      choices
    }
  ]
  // 调用问题
  inquirer.prompt(questions).then(answers => {
    handler(answers.repo) // 输出最终的答案
  })
}



