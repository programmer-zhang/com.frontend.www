<template>
	<div class="vue-quill-editor">
		<quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
		</quill-editor>
	</div>
</template>
<script>
export default {
	data() {
		return {
			content: '<h2>I am Example</h2>',
	        editorOption: {
	          // some quill options
	        }
		}
	},
	computed: {
		editor() {
	        return this.$refs.myQuillEditor.quill
	    }
	},
	mounted() {
		console.log('this is current quill instance object', this.editor)
	},
	methods: {
		onEditorBlur(quill) {
	        console.log('editor blur!', quill)
	    },
	    onEditorFocus(quill) {
	        console.log('editor focus!', quill)
	    },
	    onEditorReady(quill) {
	        console.log('editor ready!', quill)
	    },
	    onEditorChange({ quill, html, text }) {
	        console.log('editor change!', quill, html, text)
	        this.content = html
	        console.log('最终生成的文章',html)
	    }

	}

}
</script>
<style lang="scss">
	@import 'quill/dist/quill.core.css';
	@import 'quill/dist/quill.snow.css';
	@import 'quill/dist/quill.bubble.css';
	.vue-quill-editor {

	}
</style>