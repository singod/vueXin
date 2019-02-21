<template>
<div class="toast" ref="toast">
    <div class="message">
        <slot v-if="!enableHTML"></slot>
        <div  v-else v-html="$slots.default[0]"></div>
    </div>
    <p class="divided" ref="divided"></p>
    <span v-if="closeButton" class="close" @click="onClickClosed">
        {{closeButton.text}}
    </span>
</div>
</template>

<script>

    export default {
        name: "toast",
        props: {
            autoClosed: {
                type: Boolean,
                default: true
            },
            autoClosedDelay: {
                type: Number,
                default: 1
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: 'x',
                        callback: () => {
                            console.log('已关闭')
                        }
                    }
                },
                validator(val){
                        if(val.text.length<=5)return true
                        return console.error('不能输入超过5个字')
                }
            },
            enableHTML:{
                type:Boolean,
                default:false
            }
        },
            mounted() {
                this.exeAutoClosed()
                this.updateStyles()
            },
            methods: {
                updateStyles(){
                    this.$nextTick(()=>{
                        this.$refs.divided.style.height =  `${this.$refs.toast.getBoundingClientRect().height*0.8}px`
                    })
               },
               exeAutoClosed(){
                   if (this.autoClosed) {
                       setTimeout(() => {
                           this.close()
                       }, this.autoClosedDelay * 1000)
                   }
               },
                close() {
                    this.$el.remove()
                    this.$destroy()
                },
                onClickClosed(){
                    console.log(this.closeButton)
                    this.close()
                    if(this.closeButton && typeof this.closeButton.callback === 'function'){
                        this.closeButton.callback()
                    }
                }
            }

    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $toast-min-height:40px;
    $toast-bg:#e4e0e0;
.toast{
    border: 1px solid $toast-bg;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    display: flex;
    border-radius: 3px;
    align-items: center;
    background: $toast-bg;
    padding: 0 25px;
    padding-right: 5px;

    .message{
        padding: 6px 0;
    }
    .divided{
        border: 0.5px solid #fcfcf5;
        min-height: 0.8*$toast-min-height;
        margin-left: 15px;
    }
    .close{
        margin-left: 15px;
        margin-right: 5px;
        font-size: 20px;

    }
}
</style>
