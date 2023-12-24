<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';

const searchText: Ref<string> = ref('')
</script>

<template>
    <BaseInput class="search-input" :model-value="searchText" @update:model-value="newValue => searchText = newValue"
        :icon="SearchIcon" :placeholder="'Search'" />
</template>

<style scoped lang="scss">
.search-input {
    max-width: 655px;
    margin-right: 20px;
}
</style>