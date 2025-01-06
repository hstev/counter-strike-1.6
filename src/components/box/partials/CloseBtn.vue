<script setup>
import Btn from '@/components/Btn.vue';
    const closeWindow = () => {
        console.log('Close window');
    }
</script>

<template>
    <!-- TODO: slot for extending content -->
    <Btn propLabel="X" />
</template>

<style scoped>

.close__btn {
    cursor: pointer;
    border: 2px solid var(--color-border-green);
    border-radius: 3px;
    padding: 0px 2px;
    max-width: 15px;
}

</style>