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
	},
	//todo: 传入的对象数组被赋值为对象了
	deepCopy:function (obj) {
	    if (typeof obj !== 'object') {
	        return obj;
	    }
	    var newobj = {};
	    for (var attr in obj) {
	        newobj[attr] = baseTool.deepCopy(obj[attr]);
	    }
	    return newobj;
	},
}
export default baseTool;