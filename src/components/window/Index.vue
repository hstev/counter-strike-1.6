<script setup>
import SteamIcon from '@/components/window/partials/SteamIcon.vue';
import Btn from '@/components/Btn.vue';

defineProps({
  propTitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="window">
    <div class="window_header">
      <div class="window_title">
        <SteamIcon /> {{ propTitle }}
      </div>
      <div class="window_close">
        <Btn label="X" />
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
#draggable {
  position: absolute;
  z-index: 9;
  cursor: move;
}

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