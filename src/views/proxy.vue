<template>
    <div class="proxy-util">proxy 的使用</div>
</template>
<script>
    /* globals Proxy, Reflect*/

    /**
    * 一：设置私有变量/拦截has...in操作/给出提示信息或是阻止特定操作
    * 1. 传统方式设置私有变量
    */

    // const PrivateTar = function () {
    //     this.title = '定义公共变量';
    //     this.set = secret => {
    //         _secretTar = secret;
    //     };
    //     this.get = () => {
    //         return _secretTar;
    //     };
    // };
    // const privateTar = new PrivateTar();
    // privateTar.set('set变量');
    // console.log(privateTar.title); // '定义公共变量'
    // console.log(privateTar.get()); // 'set变量'
    // console.log(privateTar._secretTar); // undefined

    /**
    * 一：设置私有变量/拦截has...in操作/给出提示信息或是阻止特定操作
    * 1. proxy 设置私有变量
    */
    // let TargetData = {
    //     _secretTar: '定义私有变量',
    //     title: '定义公共变量'
    // };
    // let ProxyTarget = new Proxy(TargetData, {
    //     get: (target, prop) => {
    //         // 以下划线开头的作为私有变量
    //         if (prop.startsWith('_')) {
    //             console.log('不能获取私有变量！');
    //             return false;
    //         }
    //         // 非私有变量，返回原属性值
    //         return target[prop];
    //     },
    //     set: (target, prop, value) => {
    //         if (prop.startsWith('_')) {
    //             console.log('不能修改私有变量！');
    //             return false;
    //         }
    //         target[prop] = value;
    //     },
    //     // in 操作符的捕捉器
    //     has: (target, prop) => {
    //         return prop.startsWith('_') ? false : (prop in target);
    //     }
    // });

    // ProxyTarget._secretDrink; // 不能获取私有变量！
    // console.log(ProxyTarget.title); // '定义公共变量'
    // ProxyTarget._secretDrink = '修改私有变脸'; // 不能修改私有变量！
    // console.log('_secretDrink' in ProxyTarget); // false
    // console.log('title' in ProxyTarget); // true

    /** has 操作符只对has...in拦截，for...in拦截无效 */
    // for (let i in ProxyTarget) {
    //     console.log(i);
    //     console.log(ProxyTarget[i]);
    // }

    /**
    * 一：设置私有变量/拦截has...in操作/给出提示信息或是阻止特定操作
    * 2. 给出提示信息或是阻止特定操作
    */

    // let dataStore = {
    //     noDelete: 1235,
    //     oldMethod: () => {},
    //     doNotChange: 'tried and true'
    // };

    // const NODELETE = ['noDelete'];
    // const DEPRECATED = ['oldMethod'];
    // const NOCHANGE = ['doNotChange'];

    // dataStore = new Proxy(dataStore, {
    //     set: (target, key, value, proxy) => {
    //         if (NOCHANGE.includes(key)) {
    //             throw Error(`Error! ${key} is immutable.`);
    //         }
    //         return Reflect.set(target, key, value, proxy);
    //     },
    //     deleteProperty: (target, key) => {
    //         if (NODELETE.includes(key)) {
    //             throw Error(`Error! ${key} cannot be deleted.`);
    //         }
    //         return Reflect.deleteProperty(target, key);

    //     },
    //     get: (target, key, proxy) => {
    //         if (DEPRECATED.includes(key)) {
    //             console.warn(`Warning! ${key} is deprecated.`);
    //         }
    //         var val = target[key];

    //         return typeof val === 'function'
    //         ? function (...args) {
    //             Reflect.apply(target[key], target, args);
    //         }
    //         : val;
    //     }
    // });

    // dataStore.doNotChange = 'foo'; // error: doNotChange is immutable.
    // delete dataStore.noDelete; // error: noDelete cannot be deleted.
    // dataStore.oldMethod(); // warning: oldMethod is deprecated.


    /**
    * 二：利用 proxy 进行数据校验
    * 1. 单个校验
    */
    // let ValidTarget = {
    //     phoneNum: '18512345678'
    // };
    // ValidTarget = new Proxy(ValidTarget, {
    //     set: (target, prop, value) => {
    //         if (prop === 'phoneNum') {
    //             // phone number validation
    //             let re = /^1[0-9]{10}$/;
    //             if (!re.test(value)) {
    //                 // console.log(`Cannot set ${prop} to ${value}. Wrong format. Should be 1xx-xxxx-xxxx`);
    //                 throw Error(`Cannot set ${prop} to ${value}. Wrong format. Should be 1xx-xxxx-xxxx`);
    //             }
    //         }
    //         target[prop] = value;
    //     }
    // });
    // ValidTarget.phoneNum = '21012345678'; // error message

    /**
    * 二：利用 proxy 进行数据校验
    * 2. 抽离校验模块
    */
    // let ValidatorUtil = {
    //     phoneNum: value => {
    //         let re = /^1[0-9]{10}$/;
    //         if (!re.test(value)) {
    //             // console.log(`Cannot set ${prop} to ${value}. Wrong format. Should be 1xx-xxxx-xxxx`);
    //             throw Error(`Cannot set phoneNumber to ${value}. Wrong format. Should be 1xx-xxxx-xxxx`);
    //         }
    //     }
    // };

    // ValidatorUtil = new Proxy(ValidatorUtil, {
    //     set: (target, prop, value) => {
    //         if (!ValidatorUtil[prop](value)) {
    //             target[prop] = value;
    //         }
    //     }
    // });

    // ValidatorUtil.phoneNum = '11012345678';
    // console.log(ValidatorUtil.phoneNum); // error message

    /**
    * 二：利用 proxy 进行数据校验
    * 3. 如果要直接为对象的所有属性开发一个校验器可能很快就会让代码结构变得臃肿，使用 Proxy 则可以将校验器从核心逻辑分离出来自成一体.
    * 升级版这里有问题，需要改造下，感觉像是返回值有问题
    */
    // function createValidator(target, validator) {
    //     return new Proxy(target, {
    //         _validator: validator,
    //         set(target, prop, value) {
    //             if (target.hasOwnProperty(prop)) {
    //                 let validator = this._validator[prop];
    //                 if (!!validator(value)) {
    //                     // return Reflect.set(target, prop, value);
    //                 }
    //                 else {
    //                     console.log(`Cannot set ${prop} to ${value}. Invalid.`);
    //                     // throw Error(`Cannot set ${prop} to ${value}. Invalid.`);
    //                 }
    //             }
    //             else {
    //                 console.log(`${prop} is not a valid property`);
    //                 // throw Error(`${prop} is not a valid property`);
    //             }
    //         }
    //     });
    // }

    // const personValidators = {
    //     name(val) {
    //         return typeof val === 'string';
    //     },
    //     age(val) {
    //         return typeof age === 'number' && age > 18;
    //     }
    // }

    // class Person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //         return createValidator(this, personValidators);
    //     }
    // }

    // const bill = new Person('Bill', 25); // 以下操作都会报错
    // // bill.name = 0;
    // bill.age = 'Bill';
    // bill.age = 15;

    /**
    * 三: 利用proxy进行记录对象访问
    */

    // let api = {
    //     apiKey: 'xxxx',
    //     getUsers: () => {}
    // };

    // api = new Proxy(api, {
    //     get: (target, key, proxy) => {
    //         var value = target[key];
    //         return function () {
    //             logMethodAsync(new Date(), key);
    //             return Reflect.apply(value, target, arguments);
    //         };
    //     }
    // });

    // api.getUsers();

    // function logMethodAsync(timestamp, method) {
    //     setTimeout(() => {
    //         console.log(`${timestamp} - Logging ${method} request asynchronously.`);
    //     }, 0);
    // }

    /**
    * 四: 普通函数与构造函数的兼容
    * 构造函数不使用new关键字调用的话,会抛出异常
    */

    /** 普通函数与构造函数的兼容 */
    // class Test {
    //     constructor(a, b) {
    //         console.log('constructor', a, b);
    //     }
    // }

    // // Test(1, 2) // throw an error(非new方式调用报错)
    // let proxyClass = new Proxy(Test, {
    //     apply: (target, thisArg, argumentsList) => {
    //         // 如果想要禁止使用非new的方式来调用函数，直接抛出异常即可
    //         // throw new Error(`Function ${target.name} cannot be invoked without 'new'`)
    //         return new (target.bind(thisArg, ...argumentsList))();
    //     }
    // });

    // proxyClass(1, 2); // constructor 1 2

    /**
    * 五: 深层取值判断
    */

    // const country = {
    //     name: 'China',
    //     city: {
    //         name: 'BeiJing',
    //         area: {
    //             name: 'HaiDian'
    //         }
    //     }
    // };
    // 传统方式
    // const areaName = country.city
    //     && country.city.area
    //     && country.city.area.name;
    // const areaId = country.provice.city.area.name;

    /**
    * 五: 深层取值判断
    * 利用 Proxy get()拦截 实现 (要注意的是Proxy第一个参数传入的是个对象)
    * 1. 基础版：利用 get() 对传入对象进行拦截
    */

    // function getData(obj) {
    //     return new Proxy(obj, {
    //         get: (target, prop) => {
    //             console.log(prop);
    //             return target[prop];
    //         }
    //     });
    // }
    // let res = getData(country).provice; // provice
    // console.log(res); // undefined
    // console.log(res.xxx.yyy.zzz); // throw error

    /**
    * 五: 深层取值判断
    * 利用 Proxy get()拦截 实现 (要注意的是Proxy第一个参数传入的是个对象)
    *
    * 2. 但是当 target[prop] 是undefined的时候，Proxy get()的入参变成了undefined，但Proxy第一个入参必须为对象
    *    需要对 obj 为 undefined 的时候进行特殊处理，为了能够深层取值，只能对值为 undefined 的属性设置默认值为空对象
    */

    // function getData(obj = {}) {
    //     return new Proxy(obj, {
    //         get: (target, prop) => {
    //             console.log(prop);
    //             return getData(target[prop]); // 返回一个代理对象，让其在undefined的时候还能够继续执行
    //         }
    //     });
    // }
    // let res = getData(country).provice; // provice
    // console.log(res); // {}
    // console.log(res.xxx.yyy.zzz); // {}

    // /** 把对象属性当做函数去执行，最终返回入参，这样只要保证最后入参是undefined就好(参考网络方案) */
    // function noop() {}
    // function getData(obj) {
    //     // 注意这里拦截的是 noop 函数
    //     return new Proxy(noop, {
    //         // 这里支持返回执行的时候传入的参数
    //         apply: (target, context, [arg]) => {
    //             return obj;
    //         },
    //         get: (target, prop) => {
    //             return getData(obj[prop]);
    //         }
    //     });
    // }
    // let res1 = getData(country)() === country; // true
    // let res2 = getData(country).city.name(); // BeiJing
    // let res3 = getData(country).city.name.xxx(); // undefined
    // let res4 = getData(country).city.name.xxx.yyy.zzz(); // Cannot read property 'yyy' of undefined

    /**
    * 五: 深层取值判断
    * 利用 Proxy get()拦截 实现 (要注意的是Proxy第一个参数传入的是个对象)
    *
    * 3. 我们理想中的应该是，如果属性为 undefined 就返回 undefined，但仍要支持访问下级属性，而不是抛出错误
    *    顺着这个思路来的话，很明显当属性为 undefined 的时候也需要用 Proxy 进行特殊处理
    *    所以我们需要一个具有下面特性的 get 方法
    *    getData(undefined)() === undefined; // true
    *    getData(undefined).xxx.yyy.zzz(); // undefined
    *    这里完全不需要注意 get(undefined).xxx 是否为正确的值，因为想获取值必须要执行才能拿到
    *    那么只需要对所有 undefined 后面访问的属性都默认为 undefined 就好了,所以我们需要一个代理了undefined后的返回对象
    */

    // let isFirst = true;
    // function noop() {}
    // let proxyVoid = getData(undefined);
    // function getData(obj) {
    //     if (obj === undefined && !isFirst) {
    //         // 让 get 方法第一次接收代理 undefined 的时候不会死循环
    //         return proxyVoid;
    //     }
    //     if (obj === undefined && isFirst) {
    //         isFirst = false;
    //     }
    //     // 注意这里拦截的是 noop 函数
    //     return new Proxy(noop, {
    //         // 这里支持返回执行的时候传入的参数
    //         apply: (target, context, [arg]) => {
    //             return obj === undefined ? arg : obj;
    //         },
    //         get: (target, prop) => {
    //             if (obj !== undefined
    //                 && obj !== null
    //                 && obj.hasOwnProperty(prop)) {
    //                 return getData(obj[prop]);
    //             }
    //             return proxyVoid;
    //         }
    //     });
    // }
    // let res1 = getData(country)() === country; // true
    // console.log(res1);
    // let res2 = getData(country).city.name(); // BeiJing
    // console.log(res2);
    // let res3 = getData(country).city.name.xxx.yyy.zzz(); // undefined
    // console.log(res3);

    /**
    * 六: Proxy & Object.defineProperty
    * 1. Object.defineProperty 无法一次性监听对象所有属性，必须遍历或者递归来实现
    * 2. Object.defineProperty 无法监听新增加的属性，需要监听的话使用Vue.set()重新设置添加属性
    */

    /** Proxy */
    // let boy = {
    //     name: 'Jack',
    //     age: 22,
    //     hobbies: ['足球', '篮球', '游泳']
    // };

    // let targetBoy = new Proxy(boy, {
    //     set: (target, prop, value) => {
    //         console.log('监听到set', prop);
    //         target[prop] = value + '&Rose';
    //         return true;
    //     },
    //     get: (target, prop) => {
    //         console.log('监听到get', prop);
    //         return target[prop] + '&Proxy';
    //     }
    // });
    // targetBoy.name = 'Jack'; // 监听到set name
    // targetBoy.sex = 'male'; // 监听到set sex
    // console.log(targetBoy.sex); // 监听到get sex male&Rose&Proxy
    // targetBoy.hobbies.push('健身');

    /** Object.defineProperty */
    // let girl = {
    //     name: 'Rose',
    //     nickName: {
    //         name: 'RoseNickName'
    //     },
    //     age: 22,
    //     hobbies: ['篮球', '足球', '游泳']
    // };
    // observe(girl);
    // function observe(data) {
    //     if (!data || typeof data !== 'object') {
    //         return;
    //     }
    //     // 取出所有属性遍历
    //     Object.keys(data).forEach(key => {
    //         defineReactive(data, key, data[key]);
    //     });
    // }
    // function defineReactive(data, key, val) {
    //     observe(val); // 递归制造响应式数据
    //     Object.defineProperty(data, key, {
    //         enumerable: true,
    //         configurable: true,
    //         set: newVal => {
    //             observe(val);
    //             console.log('监听到值的变化', newVal);
    //             val = newVal;
    //         },
    //         get: () => {
    //             return val;
    //         }
    //     });
    // }

    /** Object.defineProperty监听不到新增的属性 */
    // girl.name = 'RoseRose'; // 监听到值的变化 RoseRose
    // console.log(girl.name); // RoseRose&defineProperty
    // girl.sex = 'female';
    // console.log(girl.sex); // female

    /** 变量重新Oberse之后可以监听到 */
    // defineReactive(girl, 'sex', 'other');
    // console.log(girl.sex); // other&defineProperty

    /** 使用递归之后可以监听到子属性的变化 */
    // girl.nickName.name = 'RoseNickNameChange'; // 监听到值的变化 RoseNickNameChange
    // console.log(girl.nickName.name); // RoseNickNameChange

    /**
    * 六: Proxy & Object.defineProperty
    * 3. Object.defineProperty 无法响应数组操作，vue中通过遍历和重写Array数组原型方法操作方法实现
    */

    // let girl = {
    //     name: 'Rose',
    //     nickName: {
    //         name: 'RoseNickName'
    //     },
    //     age: 22,
    //     hobbies: ['篮球', '足球', '游泳']
    // };

    // const orginalProto = Array.prototype;
    // const arrayProto = Object.create(orginalProto); // 先克隆一份Array的原型出来
    // const methodsToPatch = [
    //     'push',
    //     'pop',
    //     'shift',
    //     'unshift',
    //     'splice',
    //     'sort',
    //     'reverse'
    // ];
    // methodsToPatch.forEach(method => {
    //     arrayProto[method] = function () {
    //         // 执行原始操作
    //         console.log('监听到方法执行', method);
    //         orginalProto[method].apply(this, arguments);
    //     };
    // });

    // function observe(data) {
    //     if (!data || typeof data !== 'object') {
    //         return;
    //     }

    //     if (Array.isArray(data)) {
    //         // 如果是数组, 重写原型
    //         // data.__proto__ = arrayProto;
    //         Object.setPrototypeOf(data, arrayProto);
    //         // 传入的数据可能是多维度的,也需要执行响应式
    //         for (let i = 0; i < data.length; i++) {
    //             observe(data[i]);
    //         }
    //     }
    //     else {
    //         // 取出所有属性遍历
    //         Object.keys(data).forEach(key => {
    //             defineReactive(data, key, data[key]);
    //         });
    //     }
    // }
    // function defineReactive(data, key, val) {
    //     observe(val); // 递归制造响应式数据
    //     Object.defineProperty(data, key, {
    //         enumerable: true,
    //         configurable: true,
    //         set: newVal => {
    //             val = newVal;
    //         },
    //         get: () => {
    //             return val;
    //         }
    //     });
    // }
    // observe(girl);

    // girl.hobbies.push('健身'); // 监听到方法执行 push
    // console.log(girl.hobbies); // ["篮球", "足球", "游泳", "健身"]

    /**
    * 六: Proxy & Object.defineProperty
    * 4. Proxy 拦截方式更多, Object.defineProperty 只有 get 和 set
    */


</script>













