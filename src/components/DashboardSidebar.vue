<script lang="ts" setup>
import NavigationMenu from '@/components/NavigationMenu.vue';
import LogoCompany from '@/components/LogoCompany.vue';
</script>

<template>
    <div class="sidebar">
        <LogoCompany />
        <div class="navigation-container">
            <NavigationMenu />
        </div>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .navigation-container {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
}

.menu-help {
    margin-top: auto;

    a {
        display: flex;
        align-items: center;
    }
}
</style>