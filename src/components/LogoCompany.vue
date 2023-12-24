<script lang="ts" setup>

</script>

<template>
    <div class="logo-container">
        <span class="logo">Sales.</span>
    </div>
</template>

<style scoped lang="scss">
.logo-container {
    padding: 25px 15px 28px 15px;

    @media (min-width: $lg-breakpoint) {
        padding: 55px 0 58px 30px;
    }

    .logo {
        color: $logo-color;
        font-size: 24px;
        font-weight: 500;
    }
}
</style>