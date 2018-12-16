var path = require('path')

var rules = []

/* 
"dependencies": {
  "babel-runtime": "^6.26.0"
},
"devDependencies": {
  "babel-core": "^6.26.3",
  "babel-loader": "^7.1.5",
  "babel-plugin-transform-runtime": "^6.23.0",
  "babel-preset-env": "^1.7.0"
}
*/
rules.push({
  test: /\.js$/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        [
          "env",
          {
            "targets": {
              "browsers": ["> 1%", "last 2 versions"]
            }
          }
        ]
      ],
      plugins: ["transform-runtime"]
    }
  },
  include: [path.resolve(__dirname, '../src')]
})

// 配置tsconfig.json
/* 
"devDependencies": {
  "ts-loader": "^5.3.1",
  "typescript": "^3.2.2"
}
*/
rules.push({
  test: /\.tsx?$/,
  use: {
    loader: 'ts-loader'
  }
})

module.exports = rules