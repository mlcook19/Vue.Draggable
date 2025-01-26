<template>
  <div 
    class="ww-draggable"
    :class="{ 'ww-draggable--horizontal': content.direction === 'horizontal' }"
    ref="container"
  >
    <component :is="content.tag || 'div'" class="ww-draggable-container">
      <div v-if="!isEditing">
        <slot></slot>
      </div>
      <wwLayout
        v-else
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
import Sortable from 'sortablejs';

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
  data() {
    return {
      sortableInstance: null,
      isEditing: false
    };
  },
  computed: {
    isWWEditor() {
      return !!this.wwEditorState;
    }
  },
  mounted() {
    this.initSortable();
  },
  beforeDestroy() {
    if (this.sortableInstance) {
      this.sortableInstance.destroy();
    }
  },
  methods: {
    async initSortable() {
      if (!this.$refs.container) return;
      
      try {
        this.sortableInstance = new Sortable(this.$refs.container, {
          group: 'ww-draggable',
          animation: 150,
          disabled: this.isWWEditor,
          onStart: () => {
            this.$emit('drag:start');
          },
          onEnd: () => {
            this.$emit('drag:end');
          },
          onUpdate: (evt) => {
            this.handleListUpdate(evt.to);
          }
        });
      } catch (error) {
        console.error('Failed to initialize Sortable:', error);
      }
    },
    handleListUpdate(newList) {
      if (this.isWWEditor) return;
      
      this.$emit('update:content', {
        ...this.content,
        list: newList
      });
    }
  },
  watch: {
    'wwEditorState.isEditing': {
      immediate: true,
      handler(newValue) {
        this.isEditing = newValue;
        if (this.sortableInstance) {
          this.sortableInstance.option('disabled', newValue);
        }
      }
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