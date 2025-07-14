<template>
    <Box title="Settings" :show="show">
      <template #content>
      </template>
      <template #footer>
        <Btn label="OK"/>
        <Btn label="Cancel"/>
        <Btn label="Apply"/>
      </template>
    </Box>
</template>

<script setup>
import { ref } from 'vue'
import Box from '@/components/window/Index.vue'
import Btn from '@/components/Btn.vue'

const show = ref(true)

const cancel = () => {
  show.value = false
}
</script>