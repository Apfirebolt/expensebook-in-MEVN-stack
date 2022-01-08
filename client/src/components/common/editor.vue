<template>
  <div ref="editor" v-html="value" />
</template>
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';
import 'quill-mention/dist/quill.mention.css';
import Quill from 'quill';
import 'quill-mention';

export default {
  name: 'Editor',
  props: {
    value: {
      type: String,
      default: null,
    },
    users: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'Add your content',
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      this.editor = new Quill(this.$refs.editor, {
        modules: {
          history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true,
          },
          toolbar: [
            ['bold', 'italic', 'underline'],
          ],
          mention: {
            allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
            mentionDenotationChars: ['@'],
            isolateCharacter: true,
            source: this.filterMentions,
          },
        },
        placeholder: this.placeholder,
        theme: 'bubble',
        formats: ['bold', 'underline', 'header', 'italic', 'mention'],
      });
      this.editor.root.innerHTML = this.value;
      this.editor.on('text-change', () => {
        this.$emit('update', {
          html: this.editor.getText() ? this.editor.root.innerHTML : '',
          delta: this.editor.getContents(),
        });
      });
    },
    filterMentions(searchTerm, renderList, mentionChar) {
      let values;
      if (mentionChar === '@') {
        values = this.users;
      }
      if (searchTerm.length === 0) {
        renderList(values.map((pc) => ({
          id: pc.id,
          value: `${pc.first_name} ${pc.last_name}`,
        })), searchTerm);
      } else {
        const matches = values.filter((pc) => {
          if (pc.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || pc.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
          }
          return false;
        });
        renderList(matches.map((pc) => ({
          id: pc.id,
          value: `${pc.first_name} ${pc.last_name}`,
        })), searchTerm);
      }
    },
  },
};
</script>

<style>
.ql-container {
  font-family: 'Inter var' !important;
  font-size: 1rem !important;
  padding: 0px !important;
  min-height: 4rem;
}
.ql-editor {
  padding: 0px;
}
</style>
