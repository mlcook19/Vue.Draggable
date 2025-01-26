<template>
  <div 
    class="ww-draggable"
    :class="{ 'ww-draggable--horizontal': content.direction === 'horizontal' }"
  >
    <component :is="content.tag || 'div'" class="ww-draggable-container">
      <wwLayout
        :list="content.list"
        :direction="content.direction === 'horizontal' ? 'row' : 'column'"
        @update:list="handleListUpdate"
      >
        <slot></slot>
      </wwLayout>
    </component>
  </div>
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
  emits: ['update:content'],
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

  &-container {
    width: 100%;
    height: 100%;
  }

  &--horizontal {
    .ww-draggable-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}
</style> 