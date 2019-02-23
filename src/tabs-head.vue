<template>
  <div class="table-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "g-tabs-header",
        inject: ['eventBus'],
        created () {
            this.$emit('update:selected', 'tabs-head 抛出的数据')
        }

    }


</script>

<style scoped lang="scss">
  $tab-height:40px;
      .table-head{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border:1px solid;
        >.actions-wrapper{
            margin-left: auto;
          margin-right: 10px;
        }
      }
</style>
