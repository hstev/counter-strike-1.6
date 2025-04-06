<script setup>
import { ref } from 'vue';
import Logo from '@/components/Logo.vue';

const menuItems = [
    { id: 1, component: '<notImplemented>', name: 'New Game' },
    { id: 2, component: '<notImplemented>', name: 'Find Servers' },
    { id: 3, component: '<notImplemented>', name: 'Options' },
    { id: 4, component: '<notImplemented>', name: 'Quit' },
];

</script>
<template>
    <div>
        <ul class="menu">
            <li v-for="item in menuItems" :key="item.id">{{ item.name }}</li>
        </ul>
        
        <Logo class="box_logo" />
    </div>
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

.box_logo{
    padding-left: 5px;
    margin-top: 20px;
}
</style>
