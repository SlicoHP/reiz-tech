<script setup lang="ts">
import { onMounted, reactive, ref, type Ref } from 'vue';
import { useFetchHelper } from '@/composables/FetchHelper';
import type { TableItem, TableColumn, TableSort } from "@/types/table"
import ContentHeader from '@/components/ContentHeader.vue';
import ProductsTable from '@/components/ProductsTable.vue';
import BaseInput from '@/components/BaseInput.vue';

const items: Ref<TableItem[]> = ref([])
const filterTitle: Ref<string> = ref('')
const filterBrand: Ref<string> = ref('')
const fetchProductsError: Ref<boolean> = ref(false)

const columns = reactive<TableColumn[]>([
    { key: 'action', data: 'Action' },
    { key: 'title', data: 'Title' },
    { key: 'category', data: 'Category' },
    { key: 'brand', data: 'Brand' },
    { key: 'price', data: 'Price' },
    { key: 'stock', data: 'Stock' },
    { key: 'rating', data: 'Rating' },
])

async function loadProducts() {
    fetchProductsError.value = false
    try {
        const { products } = await useFetchHelper<TableItem>('https://dummyjson.com/products')
        items.value = products
    } catch (error) {
        fetchProductsError.value = true
    }
}

async function searchProducts(query: string) {
    fetchProductsError.value = false
    try {
        const { products } = await useFetchHelper<TableItem>(`https://dummyjson.com/products/search?q=${query}`)
        items.value = products
    } catch (error) {
        fetchProductsError.value = true
    }
}

function doSort(sortData: TableSort): void {
    const { column, order } = sortData;

    items.value.sort((a, b) => {
        return order === 'asc' ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column])
    })
}

onMounted(async () => {
    await loadProducts();
})
</script>

<template>
    <ContentHeader />
    <h1 class="section-title">Products Information</h1>
    <div class="filter-form">
        <BaseInput class="filter-product-input" :model-value="filterTitle"
            @update:model-value="newValue => searchProducts(newValue)" placeholder="Enter Title" label="Title" />
        <BaseInput class="filter-product-input" :model-value="filterBrand"
            @update:model-value="newValue => searchProducts(newValue)" placeholder="Enter Brand" label="Brand" />
    </div>
    <ProductsTable v-if="items.length" :columns="columns" :items="items" @sort="doSort" />
    <p v-else-if="fetchProductsError">There was an error loading the products.</p>
</template>

<style scoped lang="scss">
.section-title {
    margin-top: 44px;
    margin-bottom: 30px;
}

.filter-product-input {
    @media (min-width: $md-breakpoint) {
        max-width: 266px;
    }

    :deep(.input-field) {
        font-weight: 300;
    }
}

.filter-form {
    display: flex;
    gap: 22px;
    flex-direction: column;

    @media (min-width: $md-breakpoint) {
        flex-direction: row;
    }
}
</style>