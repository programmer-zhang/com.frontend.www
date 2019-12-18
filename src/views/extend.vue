<template>
    <div style="text-align: center; font-weight: bold;font-size: 20px;">JS实现继承</div>
</template>
<script>
    //继承 原始函数
   //  function Animal() {
   //      var specis = '动物';
   //  }
   //  function cat(name, color) {
   //      this.name = name;
   //      this.color = color;
   //  };
   //  //构造函数继承
   //  function Cat(name,color) {
   //      Animal.apply(this, Animal());
   //      var name = name;
   //      var color = color;
   //  };
  	// var cat1 = new Cat("大毛","黄色");
  	// console.log(cat1.species);
	

    // 原型链实现继承
    // 基本思想：利用原型让一个引用类型继承另外一个引用类型的属性和方法。
    // 构造函数，原型，实例之间的关系：
    // 每个构造函数都有一个原型对象，原型对象包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针

    class Animal {
        constructor(){
            this.type='animal';
        }
        says(say){
            let self = this
            setTimeout(function(){
                console.log(self.type + ' says ' + say)
            },1000)
        }
    }
    var animal = new Animal();
    animal.says('hi');  // animal says hi
    

    // 构造函数继承
    function SuperType() {
        this.colors = ["red", "blue", "green"];
    }
    function SubType() {
        //继承SuperType
        SuperType.call(this);
    }
    let instance1 = new SubType();
    instance1.colors.push("black");
    console.log(instance1.colors); //"red,blue,green,black"
    let instance2 = new SubType();
    console.log(instance2.colors); //"red,blue,green" 

</script>




