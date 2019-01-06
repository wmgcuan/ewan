<template>
  <div class="header" :style="{color: color}" :class="{'transparent':transparent}">
    <div class="flex sidespace">
      <span v-if="back" @click="$router.go(-1)" class="icon item icon-back"></span>
      <span v-if="cancel" @click="$router.go(-1)" class="icon item icon-del"></span>
      <span v-if="search" class="icon item icon-search"></span>
    </div>
    <div class="title"><slot></slot></div>
    <div class="flex sidespace">
      <span v-if="zan" class="icon item icon-zan"></span>
      <span v-if="share" class="icon item icon-share"></span>
      <span v-if="publish" class="icon item texticon">发布</span><!-- 登录遇到问题 -->
    </div>    
  </div>
</template>

<script>
export default {
  props: {
    back: {
      type: Boolean,
      required: false,  
      default: false 
    },
    cancel: {
      type: Boolean,
      required: false,  
      default: false 
    },
    search: {
      type: Boolean,
      required: false,  
      default: false 
    },
    zan: {
      type: Boolean,
      required: false,  
      default: false 
    },
    share: {
      type: Boolean,
      required: false,  
      default: false 
    },
    publish: {
      type: Boolean,
      required: false,  
      default: false 
    },
    transparent:{
      type: Boolean,
      required: false,  
      default: false 
    },
    color:{
      type: String,
      required: '',  
      default: '' 
    }
  },
  methods: {
    handleDel: function () {
      this.$emit('del', this.index)
    }
  }
}
</script>
<style>
.flex{
  display: flex;
  flex-flow: row nowrap; /*左至右 不回车*/
  justify-content: space-between; /*横轴分布*/
  align-items: stretch; /*纵轴单行拉伸内容*/
  align-content: stretch; /*纵轴拉伸分布*/
}
.flex .item{  
  flex: 1 1 auto;
  align-self: auto;
  order: 0;
  line-height:0; /*去除图标空隙*/
}
</style>
<style lang="less" scoped>
@import url("../assets/less/config");
@import url("../assets/style.css");
.header{
  border-bottom: #dedede 1px solid;
  background-color: #fff;
  color:#333;
  position: absolute;
  top:0;
  left: 0;
  right: 0;

  display: flex;
  flex-flow: row nowrap; /*左至右 不回车*/
  justify-content: space-between; /*横轴分布*/
  align-items: stretch; /*纵轴单行拉伸内容*/
  align-content: stretch; /*纵轴拉伸分布*/ 

  .sidespace{    
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: @header-sidespace-width; 
    .icon{
      font-size: 20px;
      line-height: @header-height;
      text-align: center;
    }
    .texticon{
      font-size: 14px;
    }
  }
  .title{
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto; 

    text-align: center;
    font-size: 18px;
    line-height: @header-height;

    text-overflow: ellipsis;    /*文本溢出:省略号*/
    white-space: nowrap;    /*书写格式:禁止文字自动换行*/
    overflow: hidden;
  }  
}
.transparent{
  background: transparent;
  border: 0;
}


</style>