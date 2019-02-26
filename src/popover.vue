<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper"
             :class="{[`position-${position}`]:true}"
             v-if="visible">
            <div class="contentSlot">
                <slot name="content"></slot>
            </div>
        </div>
        <span ref="trigger" style="display: inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "g-popover",
        data () {
            return {visible: false}
        },
            props:{
                    position:{
                        type:String,
                        default:'top',
                        validator(val){
                            return ['top','bottom','left','right'].indexOf(val)>-1
                        }
                    }
            },
        methods: {
            contentPosition(){
                const {contentWrapper,trigger}=this.$refs
                document.body.appendChild(contentWrapper)
                let {top,left,height,width} = trigger.getBoundingClientRect()
                let x = {
                    top:{
                        top:top + window.scrollY,
                        left:left + window.screenX
                    },
                    bottom:{
                        top:top + height + window.scrollY,
                        left:left + window.screenX
                    },
                    left:{
                        top:top  + window.scrollY,
                        left:left  + window.screenX
                    },
                    right:{
                        top:top  + window.scrollY ,
                        left:left +width  + window.screenX
                    }
                }
                contentWrapper.style.left = x[this.position].left + 'px'
                contentWrapper.style.top = x[this.position].top + 'px'
            },
            listenToDocument(){
                document.addEventListener('click',this.eventHandler)
            },

            isconWrapepr(e){    //判断点击的地方是否在contentWrapper里面
              return   e.path.some(child=>{
                    if(child===this.$refs.contentWrapper){
                        return true
                    }
                })
            },
            eventHandler(e){
                if(!this.isconWrapepr(e) && this.$refs.popover &&!(this.$refs.popover===e.target || this.$refs.popover.contains(e.target))) {
                    console.log('已关闭')
                    this.close()
                }
            },
            open(){
                this.$nextTick(() => {
                    this.contentPosition() //搞定内容弹出的位置
                    this.listenToDocument()//添加document的事件监听，在外部点击可以关闭气泡
                })
            },
            close(){
                this.visible = false
                document.removeEventListener('click', this.eventHandler)
            },
            onClick () {
                if (this.$refs.trigger.contains(event.target)) {
                    this.visible = !this.visible
                    if (this.visible) {
                        this.open()
                    }else{
                        this.close()
                    }
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    $border-color:#333;
    $border-radius:4px;
    $bg-color:white;
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;

}
.content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    filter: drop-shadow(0 1px 2px $border-color);
    background-color: $bg-color;
    .contentSlot{
        padding: 1em;
        max-width: 20em;
        max-height: 15em;
        overflow: scroll;
        overflow-x:auto;
        overflow-y: auto;
    }
    &.position-top{
        margin-top: -10px;
        transform: translateY(-100%);
        &::before,&::after{
            content: '';
            display: block;
            border: 10px solid transparent;
            border-top-color: black;
            width: 0;
            height: 0;
            position: absolute;
            top:100%;
            left: 10px;
        }
        &::after{
            top:calc(100% - 1px);
            border-top-color: white;
        }
    }
    &.position-bottom{
        margin-top: 10px;
        &::before,&::after{
            transform: rotate(-180deg) translateY(100%);
            content: '';
            display: block;
            border: 10px solid transparent;
            border-top-color: black;
            width: 0;
            height: 0;
            position: absolute;
            top:0;
            left: 10px;
        }
        &::after{
            top:1px;
            border-top-color: white;
        }
    }
    &.position-left{
            margin-left: -10px;
            transform: translateX(-100%);
        &::before,&::after{
            content: '';
            display: block;
            transform: rotate(-90deg) translateY(497%);
            border: 10px solid transparent;
            border-top-color: black;
            width: 0;
            height: 0;
            position: absolute;
            top:6px;
            left: 9px;
        }
        &::after{
            left: 8px;
            top:6px;
            border-top-color: white;
        }
    }
    &.position-right{
        margin-left: 11px;
        &::before,&::after{
            content: '';
            display: block;
            margin-left: -10px;
            transform: rotate(90deg) translateY(100%) translateX(-4%);
            border: 10px solid transparent;
            border-top-color: black;
            width: 0;
            height: 0;
            position: absolute;
            top:6px;
            left: 9px;
        }
        &::after{
            left: 10px;
            top:6px;
            border-top-color: white;
        }
    }


}
</style>
