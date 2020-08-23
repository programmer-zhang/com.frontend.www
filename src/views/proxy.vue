<template>
    <div class="proxy-util">proxy 的使用</div>
</template>
<script>
    /**
    * 传统设置私有变量
    */
    const PrivateTar = function() {
        this.title = '定义公共变量';
        this.set = (secret) => {
            _secretTar = secret;
        }
        this.get = () => {
            return _secretTar;
        }
    }
    const privateTar = new PrivateTar();
    privateTar.set('set变量');
    console.log(privateTar.title); // '定义公共变量'
    console.log(privateTar.get()); // 'set变量'
    console.log(privateTar._secretTar); // undefined

    console.log('-- 分割线 --');

    /**
    * proxy 设置私有变量
    */
    let TargetData = {
        _secretTar: '定义私有变量',
        title: '定义公共变量'
    };
    ProxyTarget = new Proxy(TargetData, {
        get: function(target, prop) {
            // 以下划线开头的作为私有变量
            if (prop.startsWith('_')) {
                console.log('不能获取私有变量！');
                return false;
            }
            // 非私有变量，返回原属性值
            return target[prop];
        },
        set: function(target, prop, value) {
            if (prop.startsWith('_')) {
                console.log('不能修改私有变量！');
                return false;
            }
            target[prop] = value;
        },
        // in 操作符的捕捉器
        has: function(target, prop) {
            return prop.startsWith('_') ? false : (prop in target);
        }
    });

    ProxyTarget._secretDrink; // 不能获取私有变量！
    console.log(ProxyTarget.title); // '定义公共变量'
    ProxyTarget._secretDrink = '修改私有变脸'; // 不能修改私有变量！
    console.log('_secretDrink' in ProxyTarget); // false
    console.log('title' in ProxyTarget); // true

    console.log('-- 分割线 --');


</script>













