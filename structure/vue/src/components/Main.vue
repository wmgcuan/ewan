<template>
  <div>
    是否登录：{{$store.state.isLogin}} <button @click="$store.dispatch('login')">登录</button>
    

    <router-link to="page">页面</router-link>
    <router-link to="nest">嵌套路由</router-link>
    
    <!-- 字体图标 -->
    <i class="icon-love"></i>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {}
  },
  // 挂载
  mounted() {},
  // 方法集
  methods: {},
  // 过滤器
  filters: {},
  // 计算属性
  computed: {}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>