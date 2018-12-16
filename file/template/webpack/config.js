var path = require('path')

module.exports = {
  common: false,
  entrys: {
    index: './src/index.js'
    //pageA: './src/split/pageA.js',
    //pageB: './src/split/pageB.js',
    //vendor: ['lodash']
  },
  commonChunks: [
    // 所有入口节点的2次以上出现的公共代码,生成output.filename(common), 
    // 如果common名改为entry里存在的vendor,则公共和vendor将打包在一起
    'common 2 pageA pageB',
    'vendor other'
  ],
  root: path.resolve(__dirname, '../')
}

/*
"dependencies": {
    "babel-runtime": "^6.26.0"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "webpack": "^3.10.0",
    "ts-loader": "^3.2.0",
    "typescript": "^2.6.2"
  }
*/