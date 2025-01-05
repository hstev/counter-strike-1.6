<script setup>
    const closeWindow = () => {
        console.log('Close window');
    }
</script>

<template>
    <img class="close__btn" src="../../../assets/img/close_btn.webp" />
</template>

<style scoped>

.close__btn {
    cursor: pointer;
    border: 1px solid var(--color-white);
    border-radius: 3px;
    padding: 0px 2px;
    max-width: 15px;
}

</style>