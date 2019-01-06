<!-- <template></template> -->

<script>
export default {
  props: ['content', 'index'],
  template: `
    <li @click="handleDel">
      <slot></slot>
      <slot name="slotname"></slot>
      {{content}}
    </li>`,
  methods: {
    handleDel: function () {
      this.$emit('del', this.index)
    }
  }
}
</script>


