var fs = require('fs'),
  exec = require('child_process').exec

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
  exec('npm install rollup --save-dev', function(error, stdout, stderr) {
    if (error) {
      console.error(error)
      return
    }
    console.log('安装rollup完成！')
  })

  // 往package.json里写入scripts
  var package = require('../package.json')
  if (!package.scripts) package.scripts = {}
  package.scripts['run:rollup'] = 'rollup -c'
  fs.writeFileSync('./package.json', JSON.stringify(package, null, 2))
}

module.exports = generateStructure
