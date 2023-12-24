<script lang="ts" setup>
import { computed } from 'vue';
import type { TableItem, TableColumn, TableSort } from "@/types/table"
import BaseTable from '@/components/BaseTable.vue';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue';
import ChevronUpIcon from '@/components/icons/ChevronUpIcon.vue';

const props = defineProps<{
    columns: TableColumn[]
    items: TableItem,
}>()

const emits = defineEmits<{
    sort: [TableSort]
}>()

function selectRow(row: TableItem) {
    console.log("Selected", row)
}

function onSort(sortData: TableSort) {
    emits('sort', sortData)
}

const tableColumnWidth = computed(() => `${100 / props.columns.length}%`)
</script>

<template>
    <div class="products-table-container">
        <BaseTable :columns="columns" :items="items" class="products-table">
            <template #header-action>
                <input type="checkbox" id="">
            </template>
            <template #header-title>
                <div class="header-sort">
                    <span @click="onSort({ column: 'title', order: 'asc' })">
                        <ChevronUpIcon class="sort-icon" />
                    </span>
                    Title
                    <span @click="onSort({ column: 'title', order: 'desc' })">
                        <ChevronDownIcon class="sort-icon" />
                    </span>
                </div>
            </template>
            <template #header-brand>
                <div class="header-sort">
                    <span @click="onSort({ column: 'brand', order: 'asc' })">
                        <ChevronUpIcon class="sort-icon" />
                    </span>
                    Brand
                    <span @click="onSort({ column: 'brand', order: 'desc' })">
                        <ChevronDownIcon class="sort-icon" />
                    </span>
                </div>
            </template>
            <template #column-action="{ row }">
                <input type="checkbox" @click="selectRow(row)">
            </template>
            <template #column-title="{ row }">
                <RouterLink :to="{ name: 'product', query: { id: row.id } }">{{ row.title }}</RouterLink>
            </template>
        </BaseTable>
    </div>
</template>

<style scoped lang="scss">
.products-table-container {
    overflow: hidden;
    overflow-x: auto;
}

.header-sort {
    display: flex;
    justify-content: center;

    span {
        margin: 0 10px;
        cursor: pointer;
    }

    .sort-icon {
        width: 20px;
        height: 20px;
    }
}

:deep(table) {
    width: 100%;
    background-color: $white-color;
    margin-top: 34px;
    min-width: 600px;

    tr {
        border: 1px solid #F2F2F2;
        border-collapse: collapse;
    }

    thead {
        position: sticky;
        top: 0;
        z-index: 1;
    }

    th {
        color: $black-color;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding: 24px 0;
        width: 100%;
        max-width: v-bind("tableColumnWidth");
        line-height: normal;
        background-color: $white-color;
    }

    td {
        padding-top: 30px;
        padding-bottom: 24px;
        text-align: center;
        opacity: 0.65;
        font-size: 16px;
        font-weight: 400;
        width: 100%;
        max-width: v-bind("tableColumnWidth");
        line-height: normal;
        vertical-align: middle;
        background: $white-color;
    }
}
</style>