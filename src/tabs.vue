<template>
    <div class="tabs-header">
            <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "g-tabs",
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type: String,
                default:'horizontal',
                validator(val){
                    return ['horizontal','vertical'].indexOf(val)>-1
                }
            }
        },
        data(){
          return {
              eventBus:new Vue()
          }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        provide(){
          return {
              eventBus:this.eventBus
          }
        },
        created(){
            this.$emit('update:selected', '这是emit出来的')
        },
        mounted(){
            this.$children.forEach(vm=>{
                if(vm.$options.name ==='g-tabs-header'){
                    vm.$children.forEach(child=>{
                        if(child.name===this.selected && child.$options.name==='g-tabs-item'){
                            this.eventBus.$emit('update:selected',this.selected,child)
                        }
                    })
                }
            })
        }
    }
</script>

<style scoped lang="scss">
.tabs-header{

}
</style>
