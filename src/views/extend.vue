<template>
    <div style="text-align: center; font-weight: bold;font-size: 20px;">JS实现继承</div>
</template>
<script>
    console.log('-------继承-------')
    // 原型链实现继承
    // 基本思想：利用原型让一个引用类型继承另外一个引用类型的属性和方法。
    // 构造函数，原型，实例之间的关系：
    // 每个构造函数都有一个原型对象，原型对象包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针
    // 特点：基于原型链，既是父类的实例，也是子类的实例。
    // 缺点：1.无法实现多继承；2.所有新实例都会共享父类实例的属性。

    // class Animal {
    //     constructor(){
    //         this.type='animal';
    //     }
    //     says(say){
    //         let self = this
    //         setTimeout(function(){
    //             console.log(self.type + ' says ' + say)
    //         },1000)
    //     }
    // }
    // var animal = new Animal();
    // animal.says('hi');  // animal says hi

    function SuperType(name) {
        this.name = name || 'shit';
        this.sexy = ["man", "woman", "unknow"];
        this.showName = function() {
            console.log(this.name);
        };
    };
    // SuperType.prototype.age = 18;
    // function SubType() {
    //     this.name = 'coder';
    // }
    // SubType.prototype = new SuperType();
    // var subFun = new SubType();
    // console.log('outer', subFun.age) // 18
    // console.log('outer', subFun instanceof SuperType) // true 
    

    // 构造函数继承
    // 特点：可以实现多继承（call多个），解决了所有实例共享父类实例属性的问题。
    // 缺点：1.只能继承父类实例的属性和方法；2.不能继承原型上的属性和方法。
    function SubType() {
        //继承SuperType
        SuperType.call(this);
    }
    let instance1 = new SubType();
    instance1.sexy.push("all");
    console.log(instance1.sexy); //"["man", "woman", "unknow", "all"]"
    let instance2 = new SubType();
    console.log(instance2.sexy); //"["man", "woman", "unknow"]" 

    // 组合继承
    // 特点：利用原型链继承父类的原型属性和方法，利用构造函数继承实例属性和方法
    // 缺点：调用了两次父类构造函数，生成了两份实例
    // function SuperType(name) {
    //     this.name = name;
    //     this.colors = ["red", "blue", "green"];
    // }

    // SuperType.prototype.sayName = function() {
    //     console.log(this.name);
    // }

    // function SubType(name, age) {
    //     // 继承属性
    //     SuperType.call(this, name);
    //     this.age = age;
    // }

    // // 继承方法
    // SubType.prototype = new SuperType();
    // SubType.prototype.constructor = SubType;
    // SubType.prototype.sayAge = function() {
    //     console.log(this.age);
    // };

    // let instance3 = new SubType("Nicholas", 29);
    // instance3.colors.push("black");
    // console.log(instance3.colors); //"red,blue,green,black"
    // instance3.sayName(); //"Nicholas";
    // instance3.sayAge(); //29

    // let instance4 = new SubType("Greg", 27);
    // console.log(instance4.colors); //"red,blue,green"
    // instance4.sayName(); //"Greg";
    // instance4.sayAge(); //27 

    console.log('-------继承-------')
</script>




