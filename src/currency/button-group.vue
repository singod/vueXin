<template>
     <div class="x-button-group">
         <slot></slot>
     </div>
</template>

<script>
    export default {
        name: "button-group",
        mounted(){
           this.$children.forEach(child=>{
                if(child.$options.name !== 'x-button'){
                    console.error('x-button-group的子元素应该全是x-button')
                }
            })
        }
    }
</script>

<style scoped lang="scss">
 .x-button-group{
    display: inline-flex;
    vertical-align: center;
    @import "../global";

     /deep/ .x-button{

         &:not(:first-child){
             margin-left: -1px;
         }
         &:first-child{
             border-top-left-radius: $border-radius !important;
             border-bottom-left-radius: $border-radius !important;
         }
         &:last-child{
             border-top-right-radius: $border-radius !important;
             border-bottom-right-radius: $border-radius !important;
         }
         &:hover{
             border-color: #ef6c14;
             position:relative;
             z-index: 1;
         }
             border-radius: 0 !important;

     }
}
</style>
