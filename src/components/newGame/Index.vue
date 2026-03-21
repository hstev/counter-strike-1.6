<script setup>
import { ref, computed, onBeforeUnmount } from 'vue';
import Box from '@/components/window/Index.vue';
import Btn from '@/components/Btn.vue';

const emit = defineEmits(['close']);

const mapName = ref('de_dust2');
const maxPlayers = ref(16);
const difficulty = ref('normal');
const includeBots = ref(true);

const loading = ref(false);
const loadProgress = ref(0);
let rafId = 0;
let cancelled = false;

const maps = [
  'de_dust2',
  'de_inferno',
  'de_nuke',
  'de_train',
  'cs_office',
  'cs_italy',
];

const LOAD_MS = 10000;

const loadPct = computed(() => Math.round(loadProgress.value));

function tryClose() {
  if (loading.value) return;
  emit('close');
}

function start() {
  if (loading.value) return;
  loading.value = true;
  loadProgress.value = 0;
  cancelled = false;
  const t0 = Date.now();
  const tick = () => {
    if (cancelled) return;
    const elapsed = Date.now() - t0;
    loadProgress.value = Math.min(100, (elapsed / LOAD_MS) * 100);
    if (elapsed >= LOAD_MS) {
      emit('close');
      return;
    }
    rafId = requestAnimationFrame(tick);
  };
  rafId = requestAnimationFrame(tick);
}

onBeforeUnmount(() => {
  cancelled = true;
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="loading"
      class="ng-loading"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div class="window headless no-resize ng-loading__panel">
        <div class="ng-loading__title">Starting game</div>
        <p class="ng-loading__text">Loading map and resources…</p>
        <progress
          class="ng-loading__bar"
          :value="loadProgress"
          max="100"
        />
        <span class="ng-loading__pct">{{ loadPct }}%</span>
      </div>
    </div>
  </Teleport>

  <Box title="New Game" wide @close="tryClose">
    <template #content>
      <fieldset class="flex-column ng-field">
        <legend>Create server</legend>
        <label class="ng-row">
          Map
          <select v-model="mapName">
            <option v-for="m in maps" :key="m" :value="m">{{ m }}</option>
          </select>
        </label>
        <label class="ng-row">
          Max. players
          <input v-model.number="maxPlayers" type="number" min="2" max="32" />
        </label>
        <label class="ng-row">
          Difficulty
          <select v-model="difficulty">
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label class="ng-check">
          <input v-model="includeBots" type="checkbox" />
          Include bots
        </label>
      </fieldset>
      <p class="ng-hint">
        LAN game — other players on your network can join via your local IP.
      </p>
    </template>
    <template #footer>
      <Btn label="Start" :handle-click="start" />
      <Btn label="Cancel" :handle-click="tryClose" />
    </template>
  </Box>
</template>

<style scoped>
.ng-field {
  gap: 12px;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
}

.ng-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 100%;
}

.ng-row select,
.ng-row input[type='number'] {
  width: 100%;
  max-width: 280px;
  padding: 4px 6px;
  box-sizing: border-box;
}

.ng-check {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.ng-hint {
  margin: 12px 0 0;
  font-size: 13px;
  color: #b8c4ad;
}

.ng-loading {
  position: fixed;
  inset: 0;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
}

.ng-loading__panel {
  max-width: 420px;
  width: min(90vw, 420px);
  margin: 0;
  transform: none;
  left: auto;
  top: auto;
  position: relative;
}

.ng-loading__title {
  margin: 0 12px 8px;
  font-size: 18px;
  color: #c4b550;
}

.ng-loading__text {
  margin: 0 12px 12px;
  color: #d8ded3;
  font-size: 14px;
}

.ng-loading__bar {
  width: 90%;
  margin: 0 auto 8px;
}

.ng-loading__pct {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #b8c4ad;
  margin-bottom: 8px;
}
</style>
