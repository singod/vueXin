<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="trigger">
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
            eventHandler(e){
                if( this.$refs.popover &&!(this.$refs.popover===e.target || this.$refs.popover.contains(e.target))) {
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
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;

}
.content-wrapper{
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
}
</style>
