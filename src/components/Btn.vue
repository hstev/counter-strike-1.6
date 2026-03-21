<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  handleClick: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <button class="greensteam-button" type="button" @click="handleClick">
    {{ label }}
  </button>
</template>
