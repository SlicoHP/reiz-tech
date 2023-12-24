<script setup lang="ts">
import type { PropType } from 'vue';
import { useLink, type RouterLinkProps } from 'vue-router';

const props = defineProps(['to', 'replace']);
const linkProps = props as PropType<RouterLinkProps>

// @ts-ignore (see https://router.vuejs.org/guide/advanced/composition-api#useLink)
const { href } = useLink(linkProps);
</script>

<template>
    <li>
        <RouterLink v-bind="linkProps" :to="href">
            <span class="icon" v-if="$slots.icon">
                <slot name="icon"></slot>
            </span>
            <span>
                <slot />
            </span>
        </RouterLink>
    </li>
</template>
