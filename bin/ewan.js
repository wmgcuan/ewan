#! /usr/bin/env node

var program = require('commander'),
  inquirer = require('inquirer')

const choices = ['docs', '其它'] // 可安装列表

program
  .version(require('../package.json').version, '-v, --version')
  .option('-l, --list', '可安装列表')
  .action(function(options) {
    console.log('[ewan]', options.list)
  })

//var pname = program.args[0]
//if (!pname) program.help() // 如果未接收到作何参数则返回帮助信息

program
  .command('install')
  .alias('i')
  .description('安装工具')
  .option('-t,--toolname [i]', '工具名')
  .action(function(options) {
    if (options.toolname) {
      installTool(options.toolname)
    } else {
      selectTool()
    }
  })

program
  .command('serve:docs')
  .alias('sv')
  .description('启动服务')
  .option('-t,--toolname [i]', '工具名')
  .action(function(options) {
    var exec = require('child_process').exec(
      './node_modules/.bin/docsify serve docs'
    )
    exec.stdout.on('data', function(data) {
      console.log('stdout: ' + data)
    })
  })

program.parse(process.argv)

function selectTool() {
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
    installTool(answers.repo) // 输出最终的答案
  })
}
function installTool(name) {
  switch (name) {
    case 'docs':
      require('./docsify.js')()
      break
    default:
      console.log('陆续推出更多的安装')
  }
}
