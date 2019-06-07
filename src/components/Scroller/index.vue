<template>
    <div class="wrapper" ref="wrapper">
        <slot>
        </slot>
    </div>
</template>

<script>
// 引用better-scroll
import BScroll from "better-scroll";
// import func from '../../../vue-temp/vue-editor-bridge';


export default {
    name: 'Scroller',
    props: {
        handleToScroll: {
            type: Function,
            default: function(){}
        },
        handleToTouchEnd: {
            type: Function,
            default: function(){}
        }
    },
    mounted(){
        var scroll = new BScroll(this.$refs.wrapper, {
            // 第二个参数，开启tap ，滑动时的触摸不会触发事件，仅在点击时触发
            tap: true,
            probeType: 1
          });

          this.scroll = scroll;

          scroll.on('scroll',(pos)=>{
            this.handleToScroll(pos);
          });

          scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos);
          });
    },
    methods: {
        toScrollTop(y){
            // better-scroll 方法  scrollto（）；
            this.scroll.scrollTo(0, y);
        }
    }
}
</script>

<style scoped>
    .wrapper{ height: 100%; }
</style>
