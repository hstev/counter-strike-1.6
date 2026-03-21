<script setup>
import Menu from '@/components/Menu.vue';
</script>

<template>
  <div class="start_menu">
    <Menu />
  </div>
</template>

<style scoped>
.start_menu {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  /* Let the wallpaper show through; the in-game menu is text-only, not a panel */
  background: transparent;
  padding: 16px 24px 28px;
  box-sizing: border-box;
  min-height: 0;
}
</style>