<template >
    <button class="x-button"
            :class="{[`icon-${iconPosition}`]:true,
            }"
            :disabled="disabled"
            @click="$emit('click')"

    >
        <x-icon  :name="icon"
                 :color="color"
                 :style="disabledStyle"
                 v-if="icon || loading"  :class="{loading:loading}">

            </x-icon>
        <div class="x-button-content"
             :style="disabledStyle"
        >
            <slot></slot>
        </div>
    </button>

</template>
<script>

    import Icon from'./icon.vue'
    export default {
        name:'x-button',
        components:{
            'x-icon':Icon
        },
        computed:{
            disabledStyle(){
                if(this.disabled){
                    return 'fill:#ccc; pointer-events: none;'
                }
            }
        },

        props: {
            icon:{
                type:String
            },
            disabled:{
              type:Boolean,
                default:false
            },

            color:{
              type:String,
                default:'black'
            },
            loading:{
                type:Boolean,
                default: false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            },
        }
    }
</script>
<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .x-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        > .x-button-content{
            order: 2;
        }
        > .icon {
            order: 1;
            margin-left: 0;
            margin-right: 0.3em;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left:0.3em;
            }
            > .content {
                order: 1;
            }
        }
        &[disabled]{
            border-color: #ccc;
            color:#ccc;
            cursor: not-allowed;
        }

        .loading{
            animation: spin 1s infinite linear;
        }



    }
</style>





