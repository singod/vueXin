<template>
<div>
    <x-button icon="set">
        默认样式
    </x-button>
</div>
</template>

<script>
    import Button from '../../.././src/button'
    export default {
        name: "button-demo",
        components:{
            'x-button':Button
        }
    }
</script>

<style>

</style>
