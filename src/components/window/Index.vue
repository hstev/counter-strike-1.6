<script setup>
import { ref } from 'vue';
import SteamIcon from '@/components/window/partials/SteamIcon.vue';
import Btn from '@/components/Btn.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
})

const closeBtn = ref(true);

const close = () => {
  closeBtn.value = false;
}
</script>

<template>
  <div class="window" v-show="closeBtn">
    <div class="window_header">
      <div class="window_title">
        <SteamIcon /> {{ title }}
      </div>
      <div class="window_close">
        <Btn label="X" :handleClick="close"/>
      </div>
    </div>

    <div class="window_content">
      <slot name="content"></slot>
    </div>

    <div class="window_footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scope>
.window{
  display: flex;
  flex-direction: column;
  width: 800px;
  min-height: 400px;
  max-width: 800px;
  background-color: var(--color-green);
  border: 2px solid var(--color-border-green);
  border-radius: 2px;
  padding: 10px;
}

.window_header {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-window;
  font-size: 1rem;
  color: var(--color-white);
  cursor: move;
}

.window_content {
  margin: 5px 0px;
  max-height: 400px;
}

.window_close {
  margin-right: 10px;
}

.window_footer {
  justify-content: flex-end;
  height: 35px;
  margin-right: 10px;
  margin-top: auto;
  display: flex;
}

.window_title {
  display: flex;
  align-items: center;
}
</style>