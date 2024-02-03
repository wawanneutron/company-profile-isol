<template>
  <div>
    <p
      class="text-capitalize mb-2 dark--text"
      v-if="label"
      v-bind:class="{ 'h7--xxsmall': bold, 'text--default ': !bold }"
    >
      {{ label }}
    </p>

    <client-only>
      <quill-editor
        ref="editor"
        v-bind="$attrs"
        v-on="$listeners"
        :options="editorOption"
        @change="onEmitChange()"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    bold: {
      type: Boolean,
      default: () => false
    },
    label: String
  },

  data: () => ({
    editorOption: {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, true] }],
          ['bold', 'italic', 'underline'],
          ['blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link'],
          [
            { align: '' },
            { align: 'center' },
            { align: 'right' },
            { align: 'justify' }
          ]
        ]
      }
    }
  }),

  methods: {
    onEmitChange() {
      this.$emit('on:change')
    }
  }
}
</script>

<style lang="scss" scoped>
.quill-editor {
  overflow-y: auto;
}

::v-deep .ql-toolbar.ql-snow {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

::v-deep .ql-container.ql-snow {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

::v-deep .ql-editor {
  height: 290px;
  max-height: 100%;
}
</style>
