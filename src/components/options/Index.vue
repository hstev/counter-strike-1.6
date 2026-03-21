<script setup>
import { ref } from 'vue';
import Box from '@/components/window/Index.vue';
import Btn from '@/components/Btn.vue';

defineEmits(['close']);

const volume = ref(0.75);
const mouseSens = ref(2.4);
const invertMouse = ref(false);
const rawInput = ref(true);
const gamma = ref(1.8);
const resolution = ref('1024x768');
</script>

<template>
  <Box title="Options" wide @close="$emit('close')">
    <template #content>
      <div class="opt-grid">
        <fieldset class="flex-column opt-field">
          <legend>Audio</legend>
          <label class="opt-row">
            Game volume
            <input
              v-model.number="volume"
              type="range"
              min="0"
              max="1"
              step="0.05"
            />
          </label>
        </fieldset>

        <fieldset class="flex-column opt-field">
          <legend>Mouse</legend>
          <label class="opt-row">
            Sensitivity
            <input
              v-model.number="mouseSens"
              type="range"
              min="0.5"
              max="6"
              step="0.1"
            />
          </label>
          <label><input v-model="invertMouse" type="checkbox" /> Invert mouse</label>
          <label><input v-model="rawInput" type="checkbox" /> Raw input</label>
        </fieldset>

        <fieldset class="flex-column opt-field">
          <legend>Video</legend>
          <label class="opt-row">
            Resolution
            <select v-model="resolution">
              <option value="640x480">640 × 480</option>
              <option value="800x600">800 × 600</option>
              <option value="1024x768">1024 × 768</option>
              <option value="1280x960">1280 × 960</option>
            </select>
          </label>
          <label class="opt-row">
            Gamma
            <input
              v-model.number="gamma"
              type="range"
              min="1"
              max="3"
              step="0.1"
            />
          </label>
        </fieldset>
      </div>
    </template>
    <template #footer>
      <Btn label="OK" :handle-click="() => $emit('close')" />
      <Btn label="Cancel" :handle-click="() => $emit('close')" />
      <Btn label="Apply" :handle-click="() => {}" />
    </template>
  </Box>
</template>

<style scoped>
.opt-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.opt-field {
  gap: 10px;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

.opt-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 100%;
}

.opt-row select,
.opt-row input[type='range'] {
  width: 100%;
  max-width: 360px;
}
</style>
