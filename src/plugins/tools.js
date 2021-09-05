/**
 * @file tools 工具类
 */
let baseTool = {
    simpleClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    simpleExtend(to, from) {
        let arr = [];
        arr.forEach.call(arr.slice.call(arguments, 1), function (source) {
            if (source) {
                for (let prop in source) {
                    to[prop] = source[prop];
                }
            }

        });

        return to;
    },
    // todo: 传入的对象数组被赋值为对象了
    deepCopy(obj) {
        if (typeof obj !== 'object') {
            return obj;
        }

        let newobj = {};
        for (let attr in obj) {
            newobj[attr] = baseTool.deepCopy(obj[attr]);
        }
        return newobj;
    }
};
export default baseTool;
