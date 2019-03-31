var baseTool = {
	simpleClone:function(obj) {
		return JSON.parse(JSON.stringify(obj))
	},
	simpleExtend:function(to, from) {
		var arr = [];
        arr.forEach.call(arr.slice.call(arguments, 1), function(source) {
                if (source) {
                for (var prop in source) {
                    to[prop] = source[prop];
                }
            }
        });

        return to;		
	}
}
export default baseTool;