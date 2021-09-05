// CSS冷门属性 mix-blend-mode 制作文字镂空效果
<template>
    <div class="mix-blend-mode">
        <div class="menu" :class="{'closed': !openMenu}" @click="toggleMenu">
            <div class="messages button"></div>
            <div class="music button"></div>
            <div class="home button"></div>
            <div class="places button"></div>
            <div class="bookmark button"></div>
            <div class="main button">菜单</div>
        </div>
        <div class="parent">
            <div class="child">MIX-BLEND-MODE</div>
            <div class="child">文字镂空效果</div>
        </div>
    </div>
</template>
<style lang="scss">
.mix-blend-mode {
    background-color: bisque;
    .parent {
        margin-top: 80px;
        padding: 100px;
        background-image: url("/static/images/bg.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        .child {
            font-weight: 900;
            font-size: 50px;
            color: #fff;
            background-color: #1ba5cd;
            mix-blend-mode: screen;
        }
    }
    // 使用mix-blend-mode制作混合模式菜单
    .menu, .button {
        width: 100px;
        height: 100px;
        user-select: none;
    }

    .menu {
        position: fixed;
        top: 50px;
        left: 50px;
        -webkit-transition: -webkit-transform 1.125s cubic-bezier(0.39, 1.52, 0.46, 0.92);
        transition: -webkit-transform 1.125s cubic-bezier(0.39, 1.52, 0.46, 0.92);
        transition: transform 1.125s cubic-bezier(0.39, 1.52, 0.46, 0.92);
        transition: transform 1.125s cubic-bezier(0.39, 1.52, 0.46, 0.92), -webkit-transform 1.125s cubic-bezier(0.39, 1.52, 0.46, 0.92);
        -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
        -webkit-transform-origin: top left;
                transform-origin: top left;
        cursor: pointer;
    }

    .button {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        mix-blend-mode: multiply;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 33%;
        font: 25px/100px Alegreya Sans, sans-serif;
        -webkit-transition: -webkit-transform 0.75s cubic-bezier(0.39, 1.52, 0.46, 0.92);
        transition: -webkit-transform 0.75s cubic-bezier(0.39, 1.52, 0.46, 0.92);
        transition: transform 0.75s cubic-bezier(0.39, 1.52, 0.46, 0.92);
        transition: transform 0.75s cubic-bezier(0.39, 1.52, 0.46, 0.92), -webkit-transform 0.75s cubic-bezier(0.39, 1.52, 0.46, 0.92);
        will-change: transform;
        &.closed {
            -webkit-transform: translate3d(0, 0, 0) !important;
                    transform: translate3d(0, 0, 0) !important;
        }
    }
    .main {
        color: #030f01;
        text-align: center;
        mix-blend-mode: normal;
        line-height: 100px;
        box-shadow: 0 0 0 5px rgba(3, 15, 1, 0.1);
        -webkit-transition: border-color 0.75s, color 0.75s;
        transition: border-color 0.75s, color 0.75s;
        will-change: color, border-color, background;
    }
    .closed .main {
    color: #f8f7f2;
    box-shadow: 0 0 0 5px rgba(3, 15, 1, 0);
    }

    .home {
    background-color: #1ba5cd;
    top: 0%;
    left: 225%;
    -webkit-transition-duration: 0.525s;
            transition-duration: 0.525s;
    }
    .closed .home {
    -webkit-transform: translate3d(-225%, -10%, 0) rotate(-180deg);
            transform: translate3d(-225%, -10%, 0) rotate(-180deg);
    }

    .music {
    background-color: #1ab254;
    top: 86.10368%;
    left: 207.873%;
    -webkit-transition-duration: 0.675s;
            transition-duration: 0.675s;
    }
    .closed .music {
    -webkit-transform: translate3d(-198.36244%, -89.19384%, 0) rotate(-180deg);
            transform: translate3d(-198.36244%, -89.19384%, 0) rotate(-180deg);
    }

    .messages {
    background-color: #fec72e;
    top: 159.09908%;
    left: 159.09908%;
    -webkit-transition-duration: 0.825s;
            transition-duration: 0.825s;
    }
    .closed .messages {
    -webkit-transform: translate3d(-153.22122%, -151.00892%, 0) rotate(-180deg);
            transform: translate3d(-153.22122%, -151.00892%, 0) rotate(-180deg);
    }

    .places {
    background-color: #fa7d39;
    top: 207.873%;
    left: 86.10368%;
    background-image: url(https://bennettfeely.com/cdpn/places.svg);
    -webkit-transition-duration: 0.975s;
            transition-duration: 0.975s;
    }
    .closed .places {
    -webkit-transform: translate3d(-91.98154%, -199.78284%, 0) rotate(-180deg);
            transform: translate3d(-91.98154%, -199.78284%, 0) rotate(-180deg);
    }

    .bookmark {
    background-color: #ee5656;
    top: 225%;
    left: 0%;
    -webkit-transition-duration: 1.125s;
            transition-duration: 1.125s;
    }
    .closed .bookmark {
    -webkit-transform: translate3d(-9.51056%, -228.09016%, 0) rotate(-180deg);
            transform: translate3d(-9.51056%, -228.09016%, 0) rotate(-180deg);
    }
    // 使用mix-blend-mode制作混合模式菜单结束
}
</style>
<script>
    export default {
        data() {
            return {
                openMenu: false
            };
        },
        mounted() {

        },
        methods: {
            toggleMenu() {
                this.openMenu = !this.openMenu;
            }
        }
    };
</script>