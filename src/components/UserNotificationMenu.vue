<script setup lang="ts">
import UserMenuItem from '@/components/UserMenuItem.vue';
import BellIcon from '@/components/icons/BellIcon.vue';
</script>

<template>
    <RouterLink class="notifications" :to="{ name: 'notifications' }">
        <UserMenuItem>
            <template #content>
                <div class="notification-dot"></div>
                <BellIcon />
            </template>
        </UserMenuItem>
    </RouterLink>
</template>

<style scoped lang="scss">
.notifications {
    position: relative;

    .notification-dot {
        background-color: $orange-color;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        position: absolute;
        top: -2px;
        right: -5px;
    }
}
</style>