#! /usr/bin/env node

var program = require('commander'),
  inquirer = require('inquirer')





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
      selectTool([
        { name: 'docs', desc: '文档支持' },
        { name: 'rollup', desc: '--' },
        { name: 'es6', desc: 'ES6支持' },
        { name: '其它', desc: '更多的其它安装' }
      ], function (name) {
        require('./' + name + '.js')() // 根据不同的命令转到不同的命令处理文件
      })
    }
  })

program
  .command('serve:docs')
  .alias('sv')
  .description('启动服务')
  .option('-t,--toolname [i]', '工具名')
  .action(function (options) {
    var exec = require('child_process').exec(
      './node_modules/.bin/docsify serve docs-main'
    )
    exec.stdout.on('data', function (data) {
      console.log('stdout: ' + data)
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



