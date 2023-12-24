<script lang="ts" setup>
const props = defineProps({
    width: { type: String, default: "100%" },
    height: { type: String, default: "100%" }
})
</script>

<template>
    <img class="avatar-image" src="@/assets/images/profile_avatar.png" alt="">
</template>

<style scoped>
.avatar-image {
    width: v-bind('$props.width');
    height: v-bind('$props.height');
    object-fit: cover;
}
</style>