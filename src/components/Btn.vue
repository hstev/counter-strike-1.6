<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})

const clickedBtn = (e) => {
    console.log('Button clicked');
}
</script>

<template>
    <button class="btn" type="button" @click="clickedBtn">{{ label }}</button>
</template>

<style scoped>
.btn {
    background-color: var(--color-green);
    color: var(--color-white);
    border-left: 1px solid var(--color-white);
    border-top: 1px solid var(--color-white);
    border-right: 2px solid var(--color-black);
    border-bottom: 1px solid var(--color-black);
    padding: 5px 10px;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 1rem;
}

/* TODO: Clickable event */
.btn:hover {
    border-left: 1px inset var(--color-black) ;
    border-top: 1px inset var(--color-black);
    border-right: 2px inset var(--color-black);
    border-bottom: 1px inset var(--color-black);
}
</style>