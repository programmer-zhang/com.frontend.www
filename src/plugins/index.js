import BaseTool from './tools.js';

export default {
	install(Vue) {

		Vue.prototype.$baseTool = Vue.$baseTool = BaseTool;

	}
}