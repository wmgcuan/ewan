var config = require('./config')
/*
优化相关：
CommonsChunkPlugin 提取公共代码块
UglifyjsWebpackPlugin 混淆压缩代码
功能相关
ExtractTextWebpackPlugin CSS提取成单独的文件
HtmlWebpackPlugin 生成HTML
HotModuleReplacementPlugin 模块热更新
CopyWebpackPlugin 拷贝文件
*/

var plugins = []
if (config.common) {
  plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'other'],
    minChunks: Infinity
  }))
  plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: 2,
    chunks: ['pageA', 'pageB']
  }))
}

// plugins.push(new webpack.optimize.CommonsChunkPlugin({ // 提取公共代码块  
//   name: 'vendor', // 指定为已知chunk的名称，提取公用选定为此chunk  
//   //names:[], // 遍历names新建相应的plugin实例
//   filename: 'vendor.js', // vendor-[hash].min.js
//   minChunks: 2, // 值为function时，自定义规则
//   chunks: [] // 提取代码的范围
// }))
//plugins.push(new webpack.optimize.UglifyJsPlugin()) // 混淆压缩代码

module.exports = plugins