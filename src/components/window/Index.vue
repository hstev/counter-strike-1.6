<script setup>
import { ref, onUnmounted } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  wide: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);

const root = ref(null);
const dragging = ref(false);
let pos1 = 0;
let pos2 = 0;
let pos3 = 0;
let pos4 = 0;

function normalizePosition() {
  const el = root.value;
  if (!el || el.dataset.positioned === '1') return;
  const rect = el.getBoundingClientRect();
  el.style.transform = 'none';
  el.style.left = `${rect.left}px`;
  el.style.top = `${rect.top}px`;
  el.dataset.positioned = '1';
}

function dragMouseDown(e) {
  if (e.button !== 0) return;
  e.preventDefault();
  normalizePosition();
  dragging.value = true;
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.addEventListener('mouseup', closeDragElement);
  document.addEventListener('mousemove', elementDrag);
}

function elementDrag(e) {
  e.preventDefault();
  const el = root.value;
  if (!el) return;
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  el.style.top = `${el.offsetTop - pos2}px`;
  el.style.left = `${el.offsetLeft - pos1}px`;
}

function closeDragElement() {
  dragging.value = false;
  document.removeEventListener('mouseup', closeDragElement);
  document.removeEventListener('mousemove', elementDrag);
}

onUnmounted(() => {
  document.removeEventListener('mouseup', closeDragElement);
  document.removeEventListener('mousemove', elementDrag);
});
</script>

<template>
  <div
    ref="root"
    class="window headless no-resize vgui-window"
    :class="{ wide }"
  >
    <div class="vgui-titlebar" @mousedown="dragMouseDown">
      <span class="vgui-titlebar__text">{{ title }}</span>
      <div class="vgui-titlebar__controls">
        <button
          type="button"
          class="vgui-titlebar__btn"
          aria-label="Close"
          @click.stop="emit('close')"
        />
      </div>
    </div>

    <div class="vgui-window__body">
      <slot name="content" />
    </div>

    <div v-if="$slots.footer" class="vgui-window__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.vgui-window {
  position: fixed;
  left: 50%;
  top: 44%;
  transform: translate(-50%, -50%);
  z-index: 100;
  margin: 0;
  max-width: min(92vw, 720px);
  width: min(92vw, 640px);
  display: flex;
  flex-direction: column;
  max-height: min(88vh, 560px);
}

.vgui-window.wide {
  max-width: min(96vw, 880px);
  width: min(96vw, 820px);
  max-height: min(90vh, 620px);
}

.vgui-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 18px;
  line-height: 18px;
  margin-bottom: 0.75em;
  padding-left: 24px;
  padding-right: 2px;
  box-sizing: border-box;
  cursor: move;
  background-image: url('../../assets/vgui-css/steamico.png'),
    url('../../assets/vgui-css/minimize.png'),
    url('../../assets/vgui-css/close.png');
  background-repeat: no-repeat;
  background-position: top left, top right 22px, top right;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  color: white;
  font-weight: bold;
}

.vgui-titlebar__text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vgui-titlebar__controls {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.vgui-titlebar__btn {
  width: 18px;
  height: 18px;
  min-width: 18px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0;
}

.vgui-window__body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  margin-bottom: 0.5rem;
}

.vgui-window__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  padding-top: 4px;
}
</style>
