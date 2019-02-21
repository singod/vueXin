<template>
<div class="toast">
        <slot></slot>
</div>
</template>

<script>

    export default {
        name: "toast"
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:rgba(0,0,0,0.2);
.toast{
    border: 1px solid green;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    display: flex;
    border-radius: 3px;
    align-items: center;
    background: $toast-bg;
    padding: 0 15px;
}
</style>
