<template>
  <li @click="handleDel">
    <slot></slot>
    <slot name="slotname"></slot>
    {{content}}
  </li>
</template>

<script>
export default {
  props: ['content', 'index'],
  /* props: {    
    fooA: Number, // 类型检测
    fooB: [String, Number], // String、Number、Boolean、Function、Object、Array、Symbol
    fooC: {
      type: String,         
      default: '' // 默认值
    },
    fooD: {
      type: Number,
      required: true, // 是否必填
    },
    fooE: {
      type: Object, // 当类型为Array或Object时default必须是函数返回             
      default: function(){
        return { message: 'Hello, world' }
      }
    },
    fooF: {
      // 自定义的验证器
      validator: function(value){
        return value>=0 && value<=100;
      }
    }
  }, */
  data(){
    return {}
  },
  methods: {
    handleDel: function () {
      this.$emit('del', this.index)
    }
  }
}
</script>


