<template>

<div class="collapse-item">
<div class="collapse-item-title" @click="spread">
{{title}}
</div>
        <div class="collapse-item-content" v-show="open">
            <slot>
            </slot>
        </div>
</div>

</template>

<script>
    export default {
        name: "g-collapse-item",
        data(){
          return {
              open:false
          }
        },
        inject:['eventBus'],
        props:{
            title:{
                type:String,
                required:true
            },
            name:{
                type: String
            }
        },
        mounted(){
            this.eventBus&&this.eventBus.$on('update:selected',arr=>{
                if(arr.indexOf(this.name)>-1){
                    this.open = true
                }else{
                    this.open = false
                }
            })
        },
        methods:{
            spread(){
                if(this.open){
                    this.eventBus&& this.eventBus.$emit('update:removeSelected',this.name)
                }else{
                    this.eventBus&& this.eventBus.$emit('update:addSelected',this.name)
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    $grey:#ddd;
    $border-radius:4px;

    .collapse-item{
        >.collapse-item-title{
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right:-1px;
            min-height: 42px;
            display: flex;
            align-items: center;
            padding:0 8px;
            background-color: #eeeeee;

        }
        &:first-child{
            >.collapse-item-title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            >.collapse-item-title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        >.collapse-item-content{
                padding:8px;
                border-bottom: 1px solid $grey;
        }

    }
</style>
