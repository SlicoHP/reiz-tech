<script lang="ts" setup>
import UserMenuItem from '@/components/UserMenuItem.vue';
import UserAvatar from '@/components/UserAvatar.vue';
</script>

<template>
    <RouterLink :to="{ name: 'account' }">
        <UserMenuItem>
            <template #content>
                <UserAvatar />
            </template>
        </UserMenuItem>
    </RouterLink>
</template>