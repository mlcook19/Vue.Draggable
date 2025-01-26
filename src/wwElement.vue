<template>
  <component 
    :is="content.tag || 'div'" 
    class="ww-draggable"
    :class="{ 'ww-draggable--horizontal': content.direction === 'horizontal' }"
  >
    <wwLayout
      :path="content.list"
      :direction="content.direction === 'horizontal' ? 'row' : 'column'"
      @update:list="handleListUpdate"
    >
      <slot></slot>
    </wwLayout>
  </component>
</template>

<script>
export default {
  name: 'Draggable',
  props: {
    content: { type: Object, required: true },
    // WeWeb required props
    uid: { type: String, required: true },
    wwElementState: { type: Object, required: true },
    wwEditorState: { type: Object, required: false }
  },
  methods: {
    handleListUpdate(newList) {
      this.$emit('update:content', {
        ...this.content,
        list: newList
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ww-draggable {
  width: 100%;
  min-height: 50px;
  position: relative;

  &--horizontal {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style> 