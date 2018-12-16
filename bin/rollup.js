import { addVal } from '../lib/package.js'
var fs = require('fs')

function generateStructure() {
  console.log('写入.rollup.config.js...\n')
  fs.writeFile(
    './rollup.config.js',
    `
    export default {
      input: './src/main.js',
      output: {
        file: './dist/lib/main.js',
        format: 'iife'
      }
    }
  `,
    function(err) {
      if (err) console.error('写入.rollup.config.js失败！')
      else console.log('写入.rollup.config.js成功！')
    }
  )
  console.log('安装rollup...\n')

  require('child_process').exec('npm install rollup --save-dev', function(
    error,
    stdout,
    stderr
  ) {
    if (error) {
      console.error(error)
      return
    }
    console.log('安装rollup完成！')
  })

  // const spawn = require('child_process').spawn
  // const ls = spawn('npm install rollup --save-dev')

  // ls.stdout.on('data', data => {
  //   console.log(`stdout: ${data}`)
  // })

  // ls.stderr.on('data', data => {
  //   console.log(`stderr: ${data}`)
  // })

  // ls.on('close', code => {
  //   console.log(`child process exited with code ${code}`)
  // })

  // 往package.json里写入scripts
  // var package = require('../package.json')
  // if (!package.scripts) package.scripts = {}
  // package.scripts['run:rollup'] = 'rollup -c'
  // fs.writeFileSync('./package.json', JSON.stringify(package, null, 2))
  addVal({key:'scripts/run:rollup', value:'rollup -c', path:'../'}, )
}

module.exports = generateStructure
