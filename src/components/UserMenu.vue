<script lang="ts" setup>
import AvatarMenuItem from "@/components/UserAvatarMenu.vue";
import UserNotificationMenu from "@/components/UserNotificationMenu.vue";
</script>

<template>
    <div class="user-menu">
        <UserNotificationMenu />
        <AvatarMenuItem class="avatar-menu-item" />
    </div>
</template>

<style scoped lang="scss">
.user-menu {
    display: flex;
}

.avatar-menu-item {
    margin-left: 20px;
}
</style>