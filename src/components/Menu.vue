<script setup>
import { ref } from 'vue';
import Logo from '@/components/Logo.vue';
import { windowComponents } from '@/composables/useWindows.js';

const menuItems = [
  { id: 1, component: 'newGame', name: 'New Game' },
  { id: 2, component: 'findServers', name: 'Find Servers' },
  { id: 3, component: 'options', name: 'Options' },
  { id: 4, component: null, name: 'Quit' },
];

const currentWindow = ref(null);
const quitConfirmOpen = ref(false);

function onMenuClick(item) {
  if (item.component) {
    currentWindow.value = item.component;
    return;
  }
  quitConfirmOpen.value = true;
}

function closeWindow() {
  currentWindow.value = null;
}

function confirmQuit() {
  quitConfirmOpen.value = false;
  window.close();
  setTimeout(() => {
    document.body.innerHTML =
      '<p style="font-family:sans-serif;padding:2rem;color:#ccc;background:#1a1a1a;height:100vh;margin:0;">You can close this tab.</p>';
  }, 50);
}

function cancelQuit() {
  quitConfirmOpen.value = false;
}
</script>

<template>
  <div class="menu-root">
    <div class="windows-layer">
      <component
        v-if="currentWindow"
        :is="windowComponents[currentWindow]"
        @close="closeWindow"
      />

      <div
        v-if="quitConfirmOpen"
        class="quit-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quit-title"
      >
        <div class="window headless no-resize quit-dialog">
          <div class="quit-titlebar">
            <span id="quit-title" class="quit-titlebar__text">Quit</span>
          </div>
          <p class="quit-msg">
            Are you sure you want to quit Counter-Strike?
          </p>
          <div class="quit-actions">
            <button class="greensteam-button" type="button" @click="confirmQuit">
              Yes
            </button>
            <button class="greensteam-button" type="button" @click="cancelQuit">
              No
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="menu-column">
      <nav class="cs-main-menu" aria-label="Main menu">
        <ul>
          <li v-for="item in menuItems" :key="item.id">
            <a href="#" @click.prevent="onMenuClick(item)">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
      <Logo class="box_logo" />
    </div>
  </div>
</template>

<style scoped>
.menu-root {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
}

.windows-layer {
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.windows-layer > * {
  pointer-events: auto;
}

.quit-backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  pointer-events: auto;
}

.quit-dialog {
  max-width: 420px;
  width: min(90vw, 420px);
  margin: 0;
  position: relative;
  transform: none;
  left: auto;
  top: auto;
}

.quit-titlebar {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 18px;
  line-height: 18px;
  margin-bottom: 0.75em;
  padding-left: 24px;
  box-sizing: border-box;
  cursor: default;
  background-image: url('../assets/vgui-css/steamico.png');
  background-repeat: no-repeat;
  background-position: top left;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  color: white;
  font-weight: bold;
}

.quit-titlebar__text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.quit-msg {
  margin: 8px 12px 16px;
  color: #d8ded3;
}

.quit-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.menu-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
}

/* Classic CS 1.6 main menu: plain text on the background — no VGUI panel */
.cs-main-menu {
  padding: 0;
  margin: 0 0 0 0;
  background: none !important;
  border: none !important;
  box-shadow: none;
  list-style: none;
}

.cs-main-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Undo global vgui.css `nav` rules (Steam bar) for this menu only */
.cs-main-menu li {
  display: block;
  position: static;
  margin: 0;
  padding: 0;
  line-height: inherit;
  text-align: left;
}

.cs-main-menu li a {
  display: block;
  padding: 2px 0;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  font-family: Tahoma, Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.35;
  letter-spacing: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.85);
  background: transparent !important;
  border: none;
}

.cs-main-menu li a:hover {
  color: #fff566;
  background: transparent !important;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
}

.cs-main-menu li a:active {
  color: #ffdd22;
}

.box_logo {
  padding-left: 0;
  margin-top: 18px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.75));
}
</style>
