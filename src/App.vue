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
  justify-content: space-between;
  align-items: end;
  background-color: var(--color-dark);
  padding: 10px;
}
</style>