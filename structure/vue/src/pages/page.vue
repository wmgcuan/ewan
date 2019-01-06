<template>
  <div id="container">

    <!-- 插值 -->
    {{mustache}} <span v-html="valHtml"></span> <span v-text="valText"></span><br><br>
    <!-- 帧听&过滤 -->
    <input v-model="addVal"> + 2 = {{addHandle}} {{changeCount | decimal}}
    <!-- v-model修饰符
      v-model.lazy   只有在input输入框发生一个blur时才触发
      v-model.trim   将用户输入的前后的空格去掉
      v-model.number 将用户输入的字符串转换成number,在input textarea select中使用 -->

    <div
      :class="{active: isActive}"
      :style="{fontSize: fontSize + 'px'}"
      :title="addHandle"
    >绑定动态属性 v-bind:class v-bind:style v-bind:title</div>

    <input v-model="listInputValue">
    <!-- 事件：
      v-on:click="handleHide" 
      @click.stop       阻止冒泡
      @click.prevent    阻止默认事件
      @click.self       只对绑定标签有效
      @click.once       只作用一次
      @keyup.enter      捕获特定的键
      @keyup.tab
      @keyup.delete
      @keyup.esc
      @keyup.space
      @keyup.up
      @keyup.down
      @keyup.left
      @keyup.right-->
    <button @click="listAdd">添加</button>
    <button @click="handleHide">隐藏列表</button>

    <!-- v-if:是否渲染  v-show:是否显示-->
    <ul v-if="listShow">
      <!-- 父向子传参:content ／:index-->
      <!-- 子向父传参:this.$emit('del', this.index) @del="listDel"-->
      <child-item
        :content="item"
        :index="index"
        :key="index"
        @del="listDel"
        v-for="(item, index) of listArray"
      >
        <span slot="slotname">{{index}}</span>
        默认slot内容
      </child-item>

    </ul>
    <!-- 字体图标 -->
    <i class="icon-love"></i>
  </div>
</template>

<script>
import ChildItem from '../components/childitem'

export default {
  name: 'Page',
  data() {
    return {
      mustache: '{{Mustache语法插值}}',
      valHtml: '&lt;strong&gt;<strong>HTML Value</strong>&lt;/strong&gt;',
      valText: 'Text Value',

      addVal: 1,
      changeCount: 0,

      listArray: ['list'],
      listInputValue: 'hello',
      listShow: true,

      isActive: true,
      fontSize: 14
    }
  },
  // 注删局部组件
  components: { 'child-item': ChildItem },
  // 挂载
  mounted() {},
  // 方法集
  methods: {
    handleHide: function() {
      this.listShow = !this.listShow
    },
    listAdd: function() {
      this.listArray.push(this.listInputValue)
    },
    listDel: function(index) {
      this.listArray.splice(index, 1)
    }
  },
  // 过滤器
  filters: {
    decimal: function(value) {
      return value.toFixed(1)
    }
  },
  // 计算属性
  computed: {
    addHandle: function() {
      return this.addVal + 2
    }
  },
  // 帧听器
  watch: {
    addVal: function() {
      this.changeCount++
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  color: #c33;
}
</style>
<style lang="less" scoped>
@font-face {
  font-family: 'icomoon';
  src: url('../assets/fonts/icomoon.eot?3s1z7x');
  src: url('../assets/fonts/icomoon.eot?3s1z7x#iefix')
      format('embedded-opentype'),
    url('../assets/fonts/icomoon.ttf?3s1z7x') format('truetype'),
    url('../assets/fonts/icomoon.woff?3s1z7x') format('woff'),
    url('../assets/fonts/icomoon.svg?3s1z7x#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}
@import url(../assets/style.css);

</style>