<script setup>
import Menu from '@/components/Menu.vue';
import Credits from '@/components/Credits.vue';
</script>

<template>
  <div class="menu_and_credits">
    <Menu/>
    <Credits/>
  </div>
</template>

<style scoped>
.menu_and_credits {
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-color: var(--color-dark);
  padding: 10px;
}
</style>