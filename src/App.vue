<script setup lang="ts">
import DashboardSidebar from '@/components/DashboardSidebar.vue';
</script>

<template>
  <div class="left-panel">
    <DashboardSidebar />
  </div>
  <div class="right-panel">
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100px;
  display: flex;
  background: $white-color;

  @media (min-width: $lg-breakpoint) {
    width: 230px;
  }
}

.right-panel {
  width: 100%;
  background-color: $white-100-color;
  padding-left: 100px;

  @media (min-width: $lg-breakpoint) {
    padding-left: 230px;
  }
}

.content {
  padding: 40px;
  min-height: 100vh;
}
</style>
