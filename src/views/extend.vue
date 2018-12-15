<template>
</template>
<script>
//继承 原始函数
    function Animal() {
        var specis = '动物';
    }
    // cat(name, color) {
    //     this.name = name;
    //     this.color = color;
    // },
    //构造函数继承
    function Cat(name,color) {
        Animal.apply(this, Animal());
        var name = name;
        var color = color;
    }
	var cat1 = new Cat("大毛","黄色");
	alert(cat1.species);
</script>