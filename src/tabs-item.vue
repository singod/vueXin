<template>
    <div class="tabs-item" @click="xxx" :class="classes" :disabled="disabled">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "g-tabs-item",
        inject:['eventBus'],
        data(){
          return {
              active:false
          }
        },
        computed:{
          classes(){
              return {
                  active:this.active
              }
          }
        },
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
              type: Number|String,
                required:true
            }
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
               this.active = name === this.name;
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
       .tabs-item{
           flex-shrink: 0;
           padding: 0 2em;

           &.active{
               background-color: red;
           }
           &[disabled]{
               pointer-events: none;
               opacity: 0.6;
           }
       }
</style>
