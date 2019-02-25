<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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

        methods: {
            contentPosition(){
                document.body.appendChild(this.$refs.contentWrapper)
                let {top,left} = this.$refs.trigger.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.screenX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
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
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;

}
.content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    box-shadow: 0 0 3px $border-color;
    transform: translateY(-100%);
    margin-top: -10px;
    .contentSlot{
        padding: 1em;
        max-width: 20em;
        max-height: 15em;
        overflow: scroll;
        overflow-x:auto;
        overflow-y: auto;
    }
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
        top:calc(100% - 2px);
        border-top-color: white;
    }
}
</style>
