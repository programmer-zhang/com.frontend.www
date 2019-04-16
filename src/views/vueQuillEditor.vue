<template>
	<div class="vue-quill-editor">
		<div class="editor-content">
			<quill-editor v-model="content"
	                ref="myQuillEditor"
	                :options="editorOption"
	                @blur="onEditorBlur($event)"
	                @focus="onEditorFocus($event)"
	                @ready="onEditorReady($event)">
			</quill-editor>
		</div>
		<button class="editor-view" @click="saveArticle()">
			保存
		</button>
	</div>
</template>
<script>
import quillConfig from '../plugins/quillEditorConfig.js';
export default {
	data() {
		return {
			content: '<h2>I am Example</h2>',
	        editorOption: quillConfig,
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
	        this.content = html
	    },
	    saveArticle() {
	    	console.log(this.content);
	    }
	}
}
</script>
<style lang="scss">
	@import 'quill/dist/quill.core.css';
	@import 'quill/dist/quill.snow.css';
	@import 'quill/dist/quill.bubble.css';
	.vue-quill-editor {
		.editor-content {
			width: 80%;
			.ql-editor {
				min-height: 500px;
			}
		}
		.editor-view {
			width: 200px;
			height: 30px;
			line-height: 30px;
			background-color: blue;
			border-radius: 5px;
			border:none;
			color: #fff;
		}
	}
</style>