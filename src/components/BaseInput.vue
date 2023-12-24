<script lang="ts" setup>
import { ref, type Component } from 'vue';

defineProps<{
    modelValue: string | number,
    icon?: Component,
    placeholder?: string,
    label?: string
}>()

const emits = defineEmits<{
    "update:modelValue": [string]
}>()

const uniqueId = ref(`input-${Math.random().toString(36).substring(7)}`);

function updateModelValue(event: Event) {
    if (event.target instanceof HTMLInputElement) {
        emits('update:modelValue', event.target.value)
    }
}
</script>

<template>
    <div class="input-container">
        <label v-if="label" class="input-label" :for="uniqueId">{{ label }}</label>

        <div class="input-wrapper">
            <span class="icon" v-if="icon">
                <component :is="icon" />
            </span>
            <input :id="uniqueId" class="input-field" :class="{ 'input-icon': icon }" :value="modelValue"
                @input="updateModelValue" :placeholder="placeholder">
        </div>
    </div>
</template>

<style scoped lang="scss">
.input-container {
    width: 100%;

    .input-wrapper {
        position: relative;

        .icon {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .input-label {
        color: $black-color;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 16px;
        display: block;
    }

    .input-field {
        width: 100%;
        padding: 13px 20px;
        color: $gray-color;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.20);

        &.input-icon {
            padding-left: 42px;
        }
    }
}
</style>