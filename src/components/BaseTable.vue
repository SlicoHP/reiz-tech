<script lang="ts" setup>
import type { TableItem, TableColumn } from "@/types/table"

const props = defineProps<{
    columns: TableColumn[]
    items: TableItem
}>()

</script>

<template>
    <table>
        <thead>
            <tr>
                <th v-for="(column, index) in columns" :key="`column-${index}`">
                    <slot :name="`header-${column.key}`">{{ column.data }}</slot>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in items" :key="`row-${index}`">
                <template v-if="row">
                    <td v-for="(column, columnIndex) in columns" :key="`columnIndex-${columnIndex}`">
                        <slot :name="`column-${column.key}`" :row="row">
                            {{ row[column.key] }}
                        </slot>
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
</template>