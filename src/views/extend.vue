<template>
</template>
<script>
//继承 原始函数
    // function Animal() {
    //     var specis = '动物';
    // }
    // cat(name, color) {
    //     this.name = name;
    //     this.color = color;
    // },
    //构造函数继承
 //    function Cat(name,color) {
 //        Animal.apply(this, Animal());
 //        var name = name;
 //        var color = color;
 //    }
	// var cat1 = new Cat("大毛","黄色");
	// alert(cat1.species);
	//面试题目测试
	// var a = [];
	// for(let i =0; i<i; i++){
	// 	a[i] = function() {
	// 		console.log(i)
	// 	}
	// };
	// a[5]();
	class Animal {
		constructor(){
			this.type='animal';
		}
	    says(say){
	    	setTimeout(function(){
	    		console.log(this.type + 'says' + say)
	    	},1000)
	    }
	}
	var animal = new Animal();
	animal.says('hi');
	
</script>