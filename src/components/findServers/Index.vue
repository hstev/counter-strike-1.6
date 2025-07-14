<template>
    <Box title="Find Servers">
      <template #content>
      </template>
      <template #footer>
        <Btn label="Change filters"/>
        <Btn label="Add Current Server"/>
        <Btn label="Add a Server"/>
        <Btn label="Refresh"/>
        <Btn label="Connect"/>
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