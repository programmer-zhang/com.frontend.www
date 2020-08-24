<template>
    <div class="proxy-util">proxy 的使用</div>
</template>
<script>
    /**
    * 一：设置私有变量
    * 传统设置私有变量
    */
    // const PrivateTar = function() {
    //     this.title = '定义公共变量';
    //     this.set = (secret) => {
    //         _secretTar = secret;
    //     }
    //     this.get = () => {
    //         return _secretTar;
    //     }
    // }
    // const privateTar = new PrivateTar();
    // privateTar.set('set变量');
    // console.log(privateTar.title); // '定义公共变量'
    // console.log(privateTar.get()); // 'set变量'
    // console.log(privateTar._secretTar); // undefined

    // console.log('-- 分割线 --');

    /**
    * 一：设置私有变量
    * proxy 设置私有变量
    */
    // let TargetData = {
    //     _secretTar: '定义私有变量',
    //     title: '定义公共变量'
    // };
    // ProxyTarget = new Proxy(TargetData, {
    //     get: function(target, prop) {
    //         // 以下划线开头的作为私有变量
    //         if (prop.startsWith('_')) {
    //             console.log('不能获取私有变量！');
    //             return false;
    //         }
    //         // 非私有变量，返回原属性值
    //         return target[prop];
    //     },
    //     set: function(target, prop, value) {
    //         if (prop.startsWith('_')) {
    //             console.log('不能修改私有变量！');
    //             return false;
    //         }
    //         target[prop] = value;
    //     },
    //     // in 操作符的捕捉器
    //     has: function(target, prop) {
    //         return prop.startsWith('_') ? false : (prop in target);
    //     }
    // });

    // ProxyTarget._secretDrink; // 不能获取私有变量！
    // console.log(ProxyTarget.title); // '定义公共变量'
    // ProxyTarget._secretDrink = '修改私有变脸'; // 不能修改私有变量！
    // console.log('_secretDrink' in ProxyTarget); // false
    // console.log('title' in ProxyTarget); // true

    // console.log('-- 分割线 --');

    /**
    * 二：利用 proxy 进行数据校验
    * 1. 单个校验
    */
    // let ValidTarget = {
    //     phoneNum: '18512345678'
    // };
    // ValidTarget = new Proxy(ValidTarget, {
    //     set: function(target, prop, value) {
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
    // })
    // ValidTarget.phoneNum = '21012345678'; // error message

    /**
    * 二：利用 proxy 进行数据校验
    * 2. 抽离校验模块
    */
    // let ValidatorUtil = {
    //     phoneNum: function(value) {
    //         let re = /^1[0-9]{10}$/;
    //         if (!re.test(value)) {
    //             // console.log(`Cannot set ${prop} to ${value}. Wrong format. Should be 1xx-xxxx-xxxx`);
    //             throw Error(`Cannot set phoneNumber to ${value}. Wrong format. Should be 1xx-xxxx-xxxx`);
    //         }
    //     }
    // };

    // ProxyTargetValidUtil = new Proxy(ValidatorUtil, {
    //     set: function(target, prop, value) {
    //         if (!ValidatorUtil[prop](value)) {
    //             target[prop] = value;
    //         }
    //     },
    // });

    // ProxyTargetValidUtil.phoneNum = '11012345678';
    // console.log(ProxyTargetValidUtil.phoneNum); // error message

    /**
    * 二：利用 proxy 进行数据校验
    * 3. 如果要直接为对象的所有属性开发一个校验器可能很快就会让代码结构变得臃肿，使用 Proxy 则可以将校验器从核心逻辑分离出来自成一体.
    */
    // function createValidator(target, validator) {
    //     return new Proxy(target, {
    //         _validator: validator,
    //         set(target, prop, value) {
    //             if (target.hasOwnProperty(prop)) {
    //                 let validator = this._validator[prop];
    //                 if (!!validator(value)) {
    //                     return Reflect.set(target, prop, value);
    //                 }
    //                 else {
    //                     throw Error(`Cannot set ${prop} to ${value}. Invalid.`);
    //                 }
    //             }
    //             else {
    //                 throw Error(`${prop} is not a valid property`);
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
    // bill.name = 0;
    // bill.age = 'Bill';
    // bill.age = 15;

</script>













