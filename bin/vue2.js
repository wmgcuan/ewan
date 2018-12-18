#! /usr/bin/env node

var config = require('../ewan.config'),
  project = config.projectMap['vue2']

require('../lib/colors')

module.exports = function () {
  console.log('$ npm install vue-cli -g')

  var exec = require('child_process').exec(project.install)
  exec.stdout.on('data', function (data) {
    console.color({ color: 'green' }, data)
  })
}
