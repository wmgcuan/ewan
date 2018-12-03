var Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs-extra')),
  root = __dirname.replace(/ewan\/bin/, 'ewan/'), // 全局安装时structure要定位到/usr/local/lib/node_modules/autogo
  download = require('download-git-repo'),
  exec = require('child_process').exec

async function gitrepo() {
  return new Promise((resolve, reject) => {
    download('wmgcuan/docsify', root + 'structure/docsify', err => {
      if (err) {
        reject(err)
        return
      }
      resolve()
    })
  })
}

function generateStructure() {
  console.log('download doc templat...\n')
  gitrepo()
    .then(function() {
      console.log('download doc templat success')
      creatStructure()
    })
    .catch(function(err) {
      console.log(err)
    })

  // 将structure下的内容复制到project(String)文件夹下
  function creatStructure() {
    console.log('创建文档结构...\n')
    fs.copyAsync(root + 'structure/docsify/structure', 'docs', {
      clobber: true
    }).then(function(err) {
      if (err) {
        return console.error(err)
      } else {
        exec('./node_modules/.bin/docsify -version', function(
          error,
          stdout,
          stderr
        ) {
          if (error) {
            console.log('安装docsify...')
            exec('npm install docsify-cli --save-dev', function(
              error,
              stdout,
              stderr
            ) {
              if (error) {
                console.error(error)
                return
              }
              console.log('安装docsify完成！')
              success()
            })
          } else {
            console.log(stdout)
            success()
          }
        })
        function success() {
          console.log(`
          △▽△▽△▽△▽△  
         △▽△▽    △▽△           
        △▽△▽    △▽△▽  △▽ DOCSIFY-CLI@4.3.0 △▽△▽△▽△▽
       △▽△▽    △▽△▽  △▽△▽  △▽△▽  △▽△▽     △▽△▽
      △▽△▽    △▽△▽  △▽△▽  △▽△▽  △▽△▽     △▽△▽△▽△▽△
     △▽△▽    △▽△▽  △▽△▽  △▽△▽  △▽△▽           △▽△▽
    △▽△▽△▽△▽△▽     ▽△▽△▽△▽△▽   ▽△▽△▽△▽  ▽△▽△▽△▽△▽`)
          console.log('----------------------------------------------')
          console.log('创建成功！启动: $ ewan serve:docs\n \n')
        }
      }
    })
  }
}

module.exports = generateStructure
