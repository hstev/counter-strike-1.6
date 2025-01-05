<script setup>
import Menu from '@/components/Menu.vue';
import Credits from '@/components/Credits.vue';
import Box from '@/components/Box/Index.vue';
</script>

<template>
  <div>
    <Box prop-title="Options"/>
    <div class="menu_and_credits">
      <Menu/>
      <Credits/>
    </div>
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