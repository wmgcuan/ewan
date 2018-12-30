#! /usr/bin/env node

var config = require('../ewan.config'),
  project = config.projectMap['vue2'],
  inquirer = require('inquirer'),
  path = require('path'),
  fs = require('fs-extra')

require('../lib/colors')
require('../lib/date-format.js')()

var currentPath = process.cwd()

module.exports = function () {
  console.log('$ npm install vue-cli -g')



  inquirer.prompt([
    { type: 'confirm', message: 'router demo?', name: 'routerdemo', default: true },
    { type: 'confirm', message: 'element-ui?', name: 'elementui', default: false },
    { type: 'confirm', message: 'vuex module?', name: 'vuexmodule', default: false }

  ]).then((answers) => {
    if (answers.elementui) {
      console.title('element ui')
      // npm i element-ui -S
    }
    if (answers.routerdemo) {
      console.title('router demo')
      var hash = new Date().format("MMddhhmmss")
      //fs.copySync(path.resolve(__dirname, '../file/template/vue2/add-router-demo.vue'), currentPath + '/src/components/router-' + hash + '.vue')
      console.color({ color: 'grey', icon: '✙' }, 'src/components/router-' + hash + '.vue')
      console.color({ color: 'grey', icon: '✐' }, 'src/components/router-' + hash)
      fs.copySync(path.resolve(__dirname, '../file/template/vue2/add-router-demo.vue'), currentPath + '/src/components/About.vue')
    }
    if (answers.vuexmodule) {
      console.title('vuex module')
      // npm i element-ui -S
    }
  })

  // var exec = require('child_process').exec(project.install, function (error, stdout, stderr) {
  //   console.log(stdout)
  // })
  // exec.stdout.on('data', function (data) {
  //   console.color({ color: 'green' }, data)
  // })
}
