<template>
  <div id="container">
    <div class="elementui">
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <!-- v-bind:class="[isActiveClass, isOtherClass]" -->
    </div>
    <div>
      {{title}}:
<span v-text="firstName"></span>
      <span v-html="lastName"></span>
    </div>
    <div
      v-bind:title="fullName"
      v-bind:class="{active: isActive, otherclass: isOtherclass}"
      v-bind:style="{color: activeColor, fontSize: fontSize + 'px'}"
    >属性绑定：v-bind:title="fullName" ／ 简写：:title="fullName" ／ 表达式：:title="'表达式' + fullName"</div>
    <div>双向绑定：
      <input v-model="firstName">
      <input v-model="lastName">
      ／ 计算属性：{{fullName}} ／帧听&过滤器：{{nameChangeCount | decimal}}
    </div>
    <div>
      <input v-model="todoListAddValue">
      <!-- 事件：v-on:click="handleClick"  简写&修饰：
@click="handleClick"
v-on:click.stop       阻止冒泡
v-on:click.prevent  阻止默认事件
v-on:click.self        只对绑定标签有效
v-on:click.once      只作用一次
v-on:keyup.enter   捕获特定的键
v-on:keyup.tab
v-on:keyup.delete
v-on:keyup.esc
v-on:keyup.space
v-on:keyup.up
v-on:keyup.down
v-on:keyup.left
      v-on:keyup.right-->
      <button @click="todoListAdd">添加</button>
<button @click="handleClick">隐藏列表</button>
    </div>
    <!-- v-if:是否渲染  v-show:是否显示-->
    <ul v-if="show">
      <!-- 父向子传参:content ／:index-->
      <!-- 子向父传参:this.$emit('del', this.index) @del="todoListDel"-->
      <todo-item
        v-for="(item, index) of todoList"
        :key="index"
        :content="item"
        :index="index"
        @del="todoListDel"
      >
        <span solt="soltname"></span>
      </todo-item>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComponentName",
  data() {
    return {
      title: "SB",
      firstName: "王",
      lastName: "样",
      nameChangeCount: 0,
      show: true,
      todoList: [],
      todoListAddValue: "hello"
    };
  },
  // 注删局部组件
  components: {
    "todo-item": TodoItem
  },
  // 初始化
  mounted() {},
  // 方法集
  methods: {
    handleClick: function() {
      this.show = !this.show;
    },
    todoListAdd: function() {
      console.log(111);
      this.todoList.push(this.todoListAddValue);
    },
    todoListDel: function(index) {
      this.todoList.splice(index, 1);
    }
  },
  // 过滤器
  filters: {
    decimal: function(value) {
      return value.toFixed(2);
    }
  },
  // 计算属性
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },
  // 帧听器
  watch: {
    // 数据属性
    firstName: function() {
      this.nameChangeCount++;
    },
    // 计算属性
    fullName: function() {
      this.nameChangeCount++;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
