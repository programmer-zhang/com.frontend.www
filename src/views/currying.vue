<template>
  <div>bind/call/apply/函数柯里化</div>
</template>
<script>
  console.log('------柯里化------')
  // 函数柯里化作用
  // 1. 参数复用


  // 正常正则验证字符串 reg.test(txt)
  // 函数封装后
  function check(reg, txt) {
    return reg.test(txt)
  }

  check(/\d+/g, 'test')       //false
  check(/[a-z]+/g, 'test')    //true

  // Currying后
  function curryingCheck(reg) {
    return function(txt) {
      return reg.test(txt)
    }
  }

  var hasNumber = curryingCheck(/\d+/g)
  var hasLetter = curryingCheck(/[a-z]+/g)

  hasNumber('test1')      // true
  hasNumber('testtest')   // false
  hasLetter('21212')      // false

  // 作用2.提前确认
  var on = function(element, event, handler) {
    if (document.addEventListener) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    } else {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    }
  }

  var on = (function() {
    if (document.addEventListener) {
      return function(element, event, handler) {
        if (element && event && handler) {
          element.addEventListener(event, handler, false);
        }
      };
    } else {
      return function(element, event, handler) {
        if (element && event && handler) {
          element.attachEvent('on' + event, handler);
        }
      };
    }
  })();

  //换一种写法可能比较好理解一点，上面就是把isSupport这个参数给先确定下来了
  var on = function(isSupport, element, event, handler) {
    isSupport = isSupport || document.addEventListener;
    if (isSupport) {
      return element.addEventListener(event, handler, false);
    } else {
      return element.attachEvent('on' + event, handler);
    }
  }

  // 作用3.延迟执行
  // bind函数就是通过函数柯里化实现的
  // Function.prototype.bind = function (context) {
  //   var _this = this
  //   var args = Array.prototype.slice.call(arguments, 1)
  //   return function() {
  //     return _this.apply(context, args)
  //   }
  // }

  // 通用封装方法
  // 初步封装
  // 只支持一个参数，多参数curring(a)(b)(c)不支持，可利用递归再封装一层
  var currying = function(fn) {
    // args 获取第一个方法内的全部参数
    var args = Array.prototype.slice.call(arguments, 1)
    return function() {
      // 通过闭包把初步函数保存下来
      // 将后面方法里的全部参数和args进行合并
      var newArgs = args.concat(Array.prototype.slice.call(arguments))
      // 把合并后的参数通过apply作为fn的参数并执行
      return fn.apply(this, newArgs)
    }
  }

  // 递归版本
  // 支持多参数传递
  function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length;
    var args = args || [];

    return function() {
      var _args = Array.prototype.slice.call(arguments);

      Array.prototype.push.apply(args, _args);
      // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
      if (_args.length < len) {
          return progressCurrying.call(_this, fn, args);
      }

      // 参数收集完毕，则执行fn
      return fn.apply(this, args);
    }
  }

  // 函数柯里化面试题
  // 实现一个add方法，使计算结果能够满足如下预期：
  // add(1)(2)(3) == 6;
  // add(1, 2, 3)(4) == 10;
  // add(1)(2)(3)(4)(5) == 15;
  // 1.
  // 单独参数reduce解决，不能传递多参数
  const add1 = (...args) => args.reduce((acc, cur) => acc + cur, 0)
  
  // 利用柯里化传递多参数
  const answer = function() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数

    let _args = Array.prototype.slice.call(arguments);
    console.log(_args)
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    let fn = function() {
      _args.push(...arguments);
      return fn;
    }

    let result = function() {
      let tmp = _args.reduce((a, b) => a + b, 0);
      return tmp
    }

    // 计算最终的值返回
    fn.valueOf = function () {
      console.log('valueOf', result())
      return result()
    }

    fn.toString = function () {
      console.log('toString', result() + '')
      return result() + ''
    }

    return fn;
  }

  console.log(answer(1,2,3,4))
  console.log(answer(1)(2)(3)(4))
  console.log(answer(1,2,3)(4))


  console.log('------柯里化------')
</script>