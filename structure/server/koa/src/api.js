'use strict'

/* 获取get传值:http://localhost:3000/product?id=123&name=ewan
    router.get('/product', async (ctx) => {
      ctx.query               | {id: '123', name: 'ewan'}
      ctx.request.query       | {id: '123', name: 'ewan'}
      ctx.querystring         | 'id=123&name=ewan'
      ctx.request.querystring | 'id=123&name=ewan'
      ctx.url                 | '/product?id=123&name=ewan'
      ctx.request.url         | '/product?id=123&name=ewan'
    })
 * 动态路由:http://localhost:3000/product/123
    router.get('/product/:id', async (ctx) => {
      ctx.params              | {id: '123'} 
    })
 */
module.exports = function (Router) {
  var router = new Router({
    prefix: '/api'
  })

  router.get('/', async (ctx) => {
    console.log(ctx.query);  //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
    console.log(ctx.querystring);  //aid=123&name=zhangsan      获取的是一个字符串
    console.log(ctx.url);   //获取url地址

    //ctx里面的request里面获取get传值

    console.log(ctx.request.url);
    console.log(ctx.request.query);   //{ aid: '123', name: 'zhangsan' }  对象
    console.log(ctx.request.querystring);   //aid=123&name=zhangsan

    ctx.body = "API"
  })

  router.post('/user/login', async (ctx) => {
    //设置session
    ctx.session.username = 'wanyuaning'
    ctx.body = `
    {
      "status":1,
      "msg":"success",
      "data":{
        "uid":"3",
        "userinfo":{
          "uid":"3",
          "phone":"13713753208",
          "password":"123456",
          "nickname":"n_1546683749",
          "email":null,
          "create_time":"1546683749",
          "company":null,
          "userinfo":null,
          "balance":null,
          "avatar_url":null
        }
      }
    }`
  })
  // 用户注册 /user/register
  // 参数：phone,password,repeat_password { phone:'13713753208', password:'123456', repeat_password:'123456' }
  router.post('/user/register', async (ctx) => {
    ctx.body = `{"status":1,"msg":"success"}`
  })
  // 修改个人信息/user/changeInfo
  // 参数：nickname email company userinfo(个人描述)
  router.post('/user/changeInfo', async (ctx) => {
    ctx.body = `{"status":1,"msg":"success"}`
  })

  // 帖子列表/post/postList
  // 参数 ： page size  (不传默认0，5) { uid:3, page: 0, size: 5 }
  router.post('/post/postList', async (ctx) => {
    ctx.body = `{"status":1,"msg":"success","data":[{"id":"35","title":"\u5e16\u5b50\u6807\u9898","content":"\u5e16\u5b50\u5185\u5bb9","create_time":"1546685327","date_time":"2019-01-05 18:48:47","uid":"3","view_count":null,"avatar_url":null,"nickname":"223"},{"id":"34","title":"\u5e16\u5b50\u6807\u9898","content":"\u5e16\u5b50\u5185\u5bb9","create_time":"1546685308","date_time":"2019-01-05 18:48:28","uid":"3","view_count":null,"avatar_url":null,"nickname":"223"},{"id":"33","title":"\u5e16\u5b50\u6807\u9898","content":"\u5e16\u5b50\u5185\u5bb9","create_time":"1546685184","date_time":"2019-01-05 18:46:24","uid":"3","view_count":null,"avatar_url":null,"nickname":"223"},{"id":"32","title":"\u5e16\u5b50\u6807\u9898","content":"\u5e16\u5b50\u5185\u5bb9","create_time":"1546685181","date_time":"2019-01-05 18:46:21","uid":"3","view_count":null,"avatar_url":null,"nickname":"223"},{"id":"31","title":"\u5e16\u5b50\u6807\u9898","content":"\u5e16\u5b50\u5185\u5bb9","create_time":"1546685009","date_time":"2019-01-05 18:43:29","uid":"3","view_count":null,"avatar_url":null,"nickname":"223"},{"id":"30","title":"\u5e16\u5b50\u6807\u9898","content":"\u5e16\u5b50\u5185\u5bb9","create_time":"1546685006","date_time":"2019-01-05 18:43:26","uid":"3","view_count":null,"avatar_url":null,"nickname":"223"},{"id":"29","title":"\u5e16\u5b50\u6807\u9898","content":"\u5e16\u5b50\u5185\u5bb9","create_time":"1546684927","date_time":"2019-01-05 18:42:07","uid":"3","view_count":null,"avatar_url":null,"nickname":"223"},{"id":"28","title":"\u5e16\u5b50\u6807\u9898","content":"\u5e16\u5b50\u5185\u5bb9","create_time":"1546684924","date_time":"2019-01-05 18:42:04","uid":"3","view_count":null,"avatar_url":null,"nickname":"223"},{"id":"27","title":"\u5e16\u5b50\u6807\u9898","content":"\u5e16\u5b50\u5185\u5bb9","create_time":"1546684748","date_time":"2019-01-05 18:39:08","uid":"3","view_count":null,"avatar_url":null,"nickname":"223"},{"id":"22","title":"123","content":"123","create_time":"1546672033","date_time":"2019-01-05 15:07:13","uid":"1","view_count":null,"avatar_url":null,"nickname":"123"}]}`
  })
  // 新增帖子/post/createPost
  // 参数：uid,title,content { uid:3, title: '帖子标题', content: '帖子内容' }
  router.post('/post/createPost', async (ctx) => {
    ctx.body = `{"status":1,"msg":"success"}`
  })
  // 帖子详情/post/getpost
  // 参数：post_id { uid:3, post_id: 1 }
  router.post('/post/getpost', async (ctx) => {
    ctx.body = `{"status":1,"msg":"success"}`
  })
  // 添加评论post/createComment
  // 参数：content,post_id,uid { uid:3, post_id: 1, content: '评论测试内容' }
  router.post('post/createComment', async (ctx) => {
    ctx.body = `{"status":1,"msg":"success"}`
  })

  // 发布房屋index/createHouse
  // 参数：jiage,mianji,chaoxiang ,huxing,gaodu ,dianti , niandai, gongnuan ,lvhua , biaoqian,uid,img_id(调用保存房屋图片接口时返回，多张图片用逗号拼接)
  /*uid: 3
  jiage: 15000
  mianji: 120
  chaoxiang: 朝东
  huxing: 复式户型
  gaodu: 5/20
  gaodu2: 20
  niandai: 九零年代
  dianti: 有
  gongnuan: 有
  lvhua: 50%
  biaoqian: 离地铁近,公园房
  img_id: 26
  jianjie: 佳兆业水岸新都是龙岗中心社区配备约7000平米豪华运动会所，约3万平米的，总占地约21万平方米，总建筑面积约30万平方米，共分五期开发城仅有的30万平米西班牙气质水岸小镇，位于龙岗中心城新城路与坪西路交汇处，拥有全区顶级人工湖景——月亮湖
  leixing: 类型一
  xiaoqu: 四季花城(深圳)
  dizhi: 广东省深圳市罗湖区政所在地区
  dizhi2: 五和大道
  zhiding: 1
  lijian: 3500
  jiaotong: 高发科技园总站-高新西公交总站*/
  router.post('index/createHouse', async (ctx) => {
    ctx.body = `{"status":1,"msg":"success"}`
  })
  // 保存房屋图片index/uploadHouseImg
  // 参数:uid
  router.post('index/uploadHouseImg', async (ctx) => {
    ctx.body = `{"status":1,"msg":"success","data":{"img_path":"http:\/\/house.bitradex.info\/Uploads\/2019-01-12\/1547296043_1964915137.png","img_id":"26"}}`
  })
  // 房屋列表index/getHousesList
  // 参数：page,size（默认0，5）
  router.post('/index/getHousesList', async (ctx) => {
    //获取session
    console.log('username:', ctx.session.username);
    ctx.body = `{"status":1,"msg":"success","data":[{"id":"56","biaoti":null,"jiage":"0","mianji":"","chaoxiang":"","huxing":"","gaodu":"\/","dianti":"\u65e0","niandai":"","gongnuan":"\u65e0","lvhua":"","biaoqian":"","create_time":"1547278693","date_time":"2019-01-12 15:38:13","uid":"3","jianjie":"","leixing":"","xiaoqu":null,"dizhi":null,"dizhi2":null,"zhiding":"0","lijian":null,"jiaotong":null,"photo":[]},{"id":"55","biaoti":null,"jiage":"555","mianji":"555","chaoxiang":"\u671d\u5357","huxing":"\u8dc3\u5c42\u6237\u578b","gaodu":"6\/7","dianti":"\u6709","niandai":"\u4e5d\u96f6\u5e74\u4ee3","gongnuan":"\u6709","lvhua":"","biaoqian":"\u79bb\u5730\u94c1\u8fd1","create_time":"1547278662","date_time":"2019-01-12 15:37:42","uid":"3","jianjie":"","leixing":"\u7c7b\u578b\u4e00","xiaoqu":"\u5bf9\u5bf9\u5730","dizhi":"eeee","dizhi2":"fff","zhiding":"1","lijian":"fff","jiaotong":"aaa","photo":[{"id":"24","img_path":"2019-01-12\/1547278658_125996639.jpg","uid":"3","house_id":"55","create_time":"1547278658","date_time":"2019-01-12 15:37:38"}]},{"id":"54","biaoti":null,"jiage":"0","mianji":"","chaoxiang":"","huxing":"","gaodu":"\/","dianti":"\u65e0","niandai":"","gongnuan":"\u65e0","lvhua":"","biaoqian":"","create_time":"1547278309","date_time":"2019-01-12 15:31:49","uid":"3","jianjie":"","leixing":"","xiaoqu":null,"dizhi":null,"dizhi2":null,"zhiding":"0","lijian":null,"jiaotong":null,"photo":[]},{"id":"53","biaoti":null,"jiage":"0","mianji":"","chaoxiang":"","huxing":"","gaodu":"\/","dianti":"\u65e0","niandai":"","gongnuan":"\u65e0","lvhua":"","biaoqian":"","create_time":"1547278304","date_time":"2019-01-12 15:31:44","uid":"3","jianjie":"","leixing":"","xiaoqu":null,"dizhi":null,"dizhi2":null,"zhiding":"0","lijian":null,"jiaotong":null,"photo":[]},{"id":"52","biaoti":null,"jiage":"444","mianji":"44","chaoxiang":"\u671d\u5357","huxing":"\u8dc3\u5c42\u6237\u578b","gaodu":"4\/5","dianti":"\u6709","niandai":"\u4e8c\u96f6\u5e74\u4ee3","gongnuan":"\u6709","lvhua":"20","biaoqian":"\u79bb\u5730\u94c1\u8fd1,\u5b66\u533a\u623f,\u516c\u56ed\u623f,\u5546\u4e1a\u533a","create_time":"1547278300","date_time":"2019-01-12 15:31:40","uid":"3","jianjie":"5555","leixing":"\u7c7b\u578b\u4e8c","xiaoqu":"555","dizhi":"\u70ed\u70ed\u70ed","dizhi2":"3333","zhiding":"1","lijian":"55","jiaotong":"5555","photo":[]},{"id":"51","biaoti":null,"jiage":"0","mianji":"","chaoxiang":"","huxing":"","gaodu":"\/","dianti":"\u65e0","niandai":"","gongnuan":"\u65e0","lvhua":"","biaoqian":"","create_time":"1547278247","date_time":"2019-01-12 15:30:47","uid":"3","jianjie":"","leixing":"","xiaoqu":"","dizhi":"","dizhi2":"","zhiding":"0","lijian":"","jiaotong":"","photo":[{"id":"23","img_path":"2019-01-12\/1547278245_1928038553.jpg","uid":"3","house_id":"51","create_time":"1547278245","date_time":"2019-01-12 15:30:45"}]},{"id":"50","biaoti":null,"jiage":"0","mianji":"","chaoxiang":"","huxing":"","gaodu":"\/","dianti":"\u65e0","niandai":"","gongnuan":"\u65e0","lvhua":"","biaoqian":"","create_time":"1547107608","date_time":"2019-01-10 16:06:48","uid":"3","jianjie":"","leixing":"","xiaoqu":null,"dizhi":null,"dizhi2":null,"zhiding":"0","lijian":null,"jiaotong":null,"photo":[]},{"id":"48","biaoti":null,"jiage":"0","mianji":"","chaoxiang":"","huxing":"","gaodu":"\/","dianti":"\u65e0","niandai":"","gongnuan":"\u65e0","lvhua":"","biaoqian":"","create_time":"1547107606","date_time":"2019-01-10 16:06:46","uid":"3","jianjie":"","leixing":"","xiaoqu":null,"dizhi":null,"dizhi2":null,"zhiding":"0","lijian":null,"jiaotong":null,"photo":[]},{"id":"49","biaoti":null,"jiage":"0","mianji":"","chaoxiang":"","huxing":"","gaodu":"\/","dianti":"\u65e0","niandai":"","gongnuan":"\u65e0","lvhua":"","biaoqian":"","create_time":"1547107606","date_time":"2019-01-10 16:06:46","uid":"3","jianjie":"","leixing":"","xiaoqu":null,"dizhi":null,"dizhi2":null,"zhiding":"0","lijian":null,"jiaotong":null,"photo":[]},{"id":"47","biaoti":null,"jiage":"0","mianji":"","chaoxiang":"","huxing":"","gaodu":"\/","dianti":"\u65e0","niandai":"","gongnuan":"\u65e0","lvhua":"","biaoqian":"","create_time":"1547107605","date_time":"2019-01-10 16:06:45","uid":"3","jianjie":"","leixing":"","xiaoqu":null,"dizhi":null,"dizhi2":null,"zhiding":"0","lijian":null,"jiaotong":null,"photo":[]}]}`
  })
  // 房屋详情index/getHouse
  // 参数：house_id
  router.post('index/getHouse', async (ctx) => {
    ctx.body = `{"status":1,"msg":"success","data":{"id":"55","biaoti":null,"jiage":"555","mianji":"555","chaoxiang":"\u671d\u5357","huxing":"\u8dc3\u5c42\u6237\u578b","gaodu":"6\/7","dianti":"\u6709","niandai":"\u4e5d\u96f6\u5e74\u4ee3","gongnuan":"\u6709","lvhua":"","biaoqian":"\u79bb\u5730\u94c1\u8fd1","create_time":"1547278662","date_time":"2019-01-12 15:37:42","uid":"3","jianjie":"","leixing":"\u7c7b\u578b\u4e00","xiaoqu":"\u5bf9\u5bf9\u5730","dizhi":"eeee","dizhi2":"fff","zhiding":"1","lijian":"fff","jiaotong":"aaa","userinfo":{"uid":"3","phone":"13713753208","password":"123456","nickname":"223","email":"55","create_time":"1546683749","company":"34","userinfo":"2222","balance":null,"avatar_url":null},"photo":[{"id":"24","img_path":"2019-01-12\/1547278658_125996639.jpg","uid":"3","house_id":"55","create_time":"1547278658","date_time":"2019-01-12 15:37:38"}]}}`
  })



  // user
  //router.post('/u/signup', App.hasBody, User.signup)
  //router.post('/u/update', App.hasBody, App.hasToken, User.update)

  // DB Interface test
  //router.get('/test/user/users', User.users)
  //router.post('/test/user/add', User.addUser)
  //router.post('/test/user/delete', User.deleteUser)

  return router
}