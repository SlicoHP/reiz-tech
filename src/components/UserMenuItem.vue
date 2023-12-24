<script lang="ts" setup>

</script>

<template>
    <div class="user-menu-item">
        <slot name="content"></slot>
    </div>
</template>

<style scoped lang="scss">
.user-menu-item {
    width: 52px;
    height: 52px;
    border-radius: 3px;
    background: $white-color;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
</style>