<template>
<div class="col" :class="[colClasses]"
     :style="colStyle"
>
        <slot>
        </slot>
</div>
</template>

<script>
    let validator = val=>{
        let keys = Object.keys(val)
        let valid = true
        keys.forEach(key=>{
            if(!['span','offset'].includes(key)){
                valid = false
            }
        })
        return valid
    }
    export default {
        name: "gCol",
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            },
            phone:{type:Object, validator},
            pad:{type:Object, validator},
            narrowPc:{type:Object, validator},
            pc:{type:Object, validator}
        },
        data(){
            return {
                gutter:0,
            }
        },
        computed:{
            colClasses(){
                let {span,offset,phone,pad,narrowPc,pc} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ...[phone && `col-phone-${phone.span}`],
                    ...[pad && `col-iPad-${pad.span}`],
                    ...[narrowPc && `col-narrowPc-${narrowPc.span}`],
                    ...[pc && `col-pc-${pc.span}`],
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

            @media (max-width: 576px) {
                    $class-prefix:col-phone-;
                    $class-offset:offset-phone-;
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
            @media (min-width: 577px)and (max-width: 768px) {
                    $class-prefix:col-iPad-;
                    $class-offset:offset-iPad-;
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
            @media (min-width: 769px)and (max-width: 992px) {
                    $class-prefix:col-narrowPc-;
                    $class-offset:offset-narrowPc-;
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
            @media (min-width: 993px)and (max-width: 1200px) {
                    $class-prefix:col-pc-;
                    $class-offset:offset-pc-;
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
            @media (min-width: 1201px){
                    $class-prefix:col-widePc-;
                    $class-offset:offset-widePc-;
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
    }
</style>
