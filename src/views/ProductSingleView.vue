<script lang="ts" setup>
import { useFetchHelper } from '@/composables/FetchHelper';
import type { TableItem } from '@/types/table';
import { computed, onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const product = ref();
const route = useRoute();
const errorFetching: Ref<boolean> = ref(false)
const loaded: Ref<boolean> = ref(false)

onMounted(async () => {
    const { id: productID } = route.query;

    try {
        const data = await useFetchHelper<TableItem>(`https://dummyjson.com/products/${productID}`)
        product.value = data
    } catch (error) {
        errorFetching.value = true;
    } finally {
        loaded.value = true
    }
})

const showData = computed(() => product.value && !errorFetching.value)
</script>

<template>
    <h1 class="section-title">Product</h1>
    <template v-if="loaded">
        <pre v-if="showData">{{ product }}</pre>
        <p v-else>
            Something went wrong. Please try again.
        </p>
    </template>
</template>

<style lang="scss" scoped>
.section-title {
    margin-bottom: 30px;
}

pre {
    box-sizing: border-box;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: auto;
    overflow-y: hidden;
    font-size: 18px;
    line-height: 20px;
    background: #efefef;
    border: 1px solid $gray-color;
    padding: 10px;
    color: #333;
}
</style>