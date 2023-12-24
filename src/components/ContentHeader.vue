<script lang="ts" setup>
import SearchBar from '@/components/SearchBar.vue';
import UserMenu from "@/components/UserMenu.vue";
</script>

<template>
    <div class="header">
        <SearchBar class="search-bar" />
        <UserMenu />
    </div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: $md-breakpoint) {
        flex-wrap: nowrap;
    }

    .search-bar {
        margin-bottom: 15px;

        @media (min-width: $md-breakpoint) {
            margin-bottom: 0;
        }
    }
}
</style>