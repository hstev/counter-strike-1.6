<script setup>

import { ref } from 'vue';

const items = ref([
    { id: 1, name: 'New Game' },
    { id: 2, name: 'Find Servers' },
    { id: 3, name: 'Options' },
    { id: 4, name: 'Quit' },
]);

</script>
<template>
    <ul class="menu">
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
</template>

<style scoped>

.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: var(--color-white);
    max-width: 150px;
    font-size: 1.2rem;
}

.menu li {
    padding: 0.2rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.menu li:hover {
    color: var(--color-yellow);
}

</style>
