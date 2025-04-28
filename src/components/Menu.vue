<script setup>
import { ref } from 'vue';
import Logo from '@/components/Logo.vue';
import { useWindows } from '@/composables/useWindows.js';

const menuItems = [
    { id: 1, component: 'newGame', name: 'New Game' },
    { id: 2, component: 'findServers', name: 'Find Servers' },
    { id: 3, component: 'options', name: 'Options' },
    { id: 4, component: null, name: 'Quit' },
];

const currentWindow = ref(null);

</script>

<template>
    <div>
        <component v-if="currentWindow" :is="useWindows[currentWindow]" />

        <ul class="menu">
            <li 
                v-for="item in menuItems" 
                :key="item.id" 
                @click="currentWindow = item.component"
            >{{ item.name }}</li>
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
