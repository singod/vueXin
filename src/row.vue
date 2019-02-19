<template>
<div class="row" :style="rowStyle"

>
<slot></slot>
</div>
</template>

<script>
    export default {
        name: "gRow",
        props:{
            gutter:{
                type:[Number,String]
            }
        },
        mounted(){
            this.$children.forEach(vm=>{
                vm.gutter = this.gutter
                vm.haha = 'haha'
            })
            console.log(this.$children);
        },
        computed:{
            rowStyle(){
                return {
                    marginLeft:-this.gutter/2+'px',
                    marginRight:-this.gutter/2+'px'
                }
            }
        }
    }



    // var div =  document.createElement('div')     created
    // var childDiv = document.createElement('div')
    // div.appendChild(childDiv)
    // document.body.appendChild(div)               mounted

</script>

<style scoped lang="scss">
.row{
    display: flex;
}
</style>
