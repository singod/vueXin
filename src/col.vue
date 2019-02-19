<template>
<div class="col" :class="[colClasses]"
     :style="colStyle"

>
    <div  style="border:2px solid green;
          height: 100px;
          ">
        <slot></slot>
    </div>

</div>
</template>

<script>
    export default {
        name: "gCol",
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            },
        },
        data(){
            return {
                gutter:0,
            }
        },
        computed:{
            colClasses(){
                let {span,offset} = this
                return [
                    span && `col-${span}`,
                offset && `offset-${offset}`
            ]
            },
            colStyle(){
                return {
                    paddingLeft:this.gutter/2 + 'px',
                    paddingRight:this.gutter/2 + 'px'
                }
            }
        }


    }
</script>

<style scoped lang="scss">
    .col{
        $class-prefix:col-;
        $class-offset:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24) *100%
            }
        }
        @for $n from 1 through 24 {
            &.#{$class-offset}#{$n} {
                margin-left: ($n/24) *100%
            }
        }
    }
</style>
