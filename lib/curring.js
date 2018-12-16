module.exports = {
  /* 参数累积，最终处理
   * shell(arg) => [arg]
   * shell(arg) => [arg, arg]
   * fn(arg, arg)
   */
  all: function (fn) {
    var _args = Array.prototype.slice.call(arguments, 1)
    return function shell () {
      if (arguments.length === 0) {
        var args = _args
        _args = null
        return fn.apply(this, args)
      }
      Array.prototype.push.apply(_args, [].slice.call(arguments))
      return shell
    }
  },
  /* 分步处理，结果依赖
   * step(stepFn, endFn, initRes) => initRes
   * stepFn(initRes, curVal) => preRes
   * stepFn(preRes, curVal) => preRes
   * endFn(preRes)
   */
  step: function (stepFn, endFn, initRes) { // 挂载
    var stepRes = initRes
    return function shell () {
      if (arguments.length === 0) {
        var res = stepRes
        stepRes = null
        return endFn(res)
      }
      var args = Array.prototype.slice.apply(arguments)
      args.unshift(stepRes)
      stepRes = stepFn.apply(stepFn, args)
      return shell // 运行
    }
  }
}