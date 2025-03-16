<script setup>
import Menu from '@/components/Menu.vue';
import Box from '@/components/box/Index.vue';
import Btn from '@/components/Btn.vue';


</script>

<template>
  <div>
    <Box propTitle="Still in development - Educational purpose only">
      <template #content>
        Contribute <a href="https://github.com/hstev/counter-strike-1.6/" class="link">Github</a>
      </template>
      <template #footer>
        <Btn label="Cancel" />
      </template>
    </Box>
    <div class="start_menu">
      <Menu />
    </div>
  </div>
</template>

<style scoped>
.link {
  color: var(--color-white);
  text-decoration: none;
}
.start_menu {
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-color: var(--color-dark);
  padding: 10px;
}
</style>