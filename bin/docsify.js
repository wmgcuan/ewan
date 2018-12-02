var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs-extra')),
  root = __dirname.replace(/ewan\/bin/, 'ewan/') // 全局安装时structure要定位到/usr/local/lib/node_modules/autogo
//cp = require('child_process')

function generateStructure() {
  // 将structure下的内容复制到project(String)文件夹下
  return fs
    .copyAsync(root + 'structure/docsify', 'docs', { clobber: true })
    .then(function(err) {
      if (err) {
        return console.error(err)
      } else {
        // exec('docsify -version', function(error, stdout, stderr) {
        //   if (error) {
        //     console.log('安装docsify...')
        //     exec('npm install docsify-cli -g', function(error, stdout, stderr) {
        //       if (error) {
        //         console.error('安装docsify...')
        //         return
        //       }
        //       success()
        //     })
        //   } else {
        //     console.log(stdout)
        //     success()
        //   }
        // })
        console.log(`
       △▽△▽△▽△▽△  ➊ docsify-cli@4.3.0
      △▽△▽    △▽△  ➋ 启动浏览服务: $ ewan serve:docs          
     △▽△▽    △▽△▽  △▽△▽△▽△▽△   △▽△▽△▽△  △▽△▽△▽△▽
    △▽△▽    △▽△▽  △▽△▽  △▽△▽  △▽△▽     △▽△▽
   △▽△▽    △▽△▽  △▽△▽  △▽△▽  △▽△▽     △▽△▽△▽△▽△
  △▽△▽    △▽△▽  △▽△▽  △▽△▽  △▽△▽           △▽△▽
 △▽△▽△▽△▽△▽     ▽△▽△▽△▽△▽   ▽△▽△▽△▽  ▽△▽△▽△▽△▽`)
        console.log('----------------------------------------------\n \n')
      }
    })
}

module.exports = generateStructure
