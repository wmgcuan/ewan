#! /usr/bin/env node

var config = require('../ewan.config'),
  project = config.projectMap['vue2'],
  inquirer = require('inquirer')

require('../lib/colors')

module.exports = function () {
  console.log('$ npm install vue-cli -g')



  inquirer.prompt([
    { type: 'confirm', message: 'element-ui?', name: 'elementui', default: false },
    { type: 'confirm', message: 'vuex module?', name: 'vuexmodule', default: false },
    { type: 'confirm', message: 'router demo?', name: 'routerdemo', default: false }
  ]).then((answers) => {
    if (answers.elementui) {
      // npm i element-ui -S
    }
    if (answers.routerdemo) {

    }
  })

  // var exec = require('child_process').exec(project.install, function (error, stdout, stderr) {
  //   console.log(stdout)
  // })
  // exec.stdout.on('data', function (data) {
  //   console.color({ color: 'green' }, data)
  // })
}
