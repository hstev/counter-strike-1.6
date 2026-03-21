<script setup>
import { ref, computed } from 'vue';
import Box from '@/components/window/Index.vue';
import Btn from '@/components/Btn.vue';

defineEmits(['close']);

const servers = ref([
  { name: '[24/7] Dust2 — NYC', map: 'de_dust2', players: '18/20', ping: 12 },
  { name: 'Classic Maps EU #3', map: 'de_inferno', players: '14/18', ping: 48 },
  { name: 'Office 24h', map: 'cs_office', players: '8/16', ping: 65 },
  { name: 'Train scrim', map: 'de_train', players: '10/10', ping: 22 },
  { name: 'Italy casual', map: 'cs_italy', players: '6/20', ping: 110 },
]);

const selected = ref(0);
const filter = ref('');

const filtered = computed(() => {
  const q = filter.value.trim().toLowerCase();
  if (!q) return servers.value;
  return servers.value.filter(
    (s) =>
      s.name.toLowerCase().includes(q) || s.map.toLowerCase().includes(q),
  );
});

function pickRow(i) {
  const list = filtered.value;
  const idx = servers.value.indexOf(list[i]);
  if (idx >= 0) selected.value = idx;
}

function connect() {
  /* placeholder */
}
</script>

<template>
  <Box title="Find Servers" wide @close="$emit('close')">
    <template #content>
      <div class="fs-toolbar">
        <label class="fs-search">
          Filter
          <input v-model="filter" type="search" placeholder="Name or map…" />
        </label>
      </div>
      <div class="box inset fs-table-wrap">
        <table class="fs-table" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th>Server name</th>
              <th>Map</th>
              <th>Players</th>
              <th>Ping</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in filtered"
              :key="row.name"
              :class="{ active: servers[selected]?.name === row.name }"
              @click="pickRow(i)"
            >
              <td>{{ row.name }}</td>
              <td>{{ row.map }}</td>
              <td>{{ row.players }}</td>
              <td>{{ row.ping }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="fs-status">
        {{ filtered.length }} server{{ filtered.length === 1 ? '' : 's' }} listed
      </p>
    </template>
    <template #footer>
      <Btn label="Refresh" :handle-click="() => {}" />
      <Btn label="Add a Server" :handle-click="() => {}" />
      <Btn label="Connect" :handle-click="connect" />
      <Btn label="Close" :handle-click="() => $emit('close')" />
    </template>
  </Box>
</template>

<style scoped>
.fs-toolbar {
  margin-bottom: 10px;
}

.fs-search {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 320px;
}

.fs-search input {
  padding: 4px 6px;
  box-sizing: border-box;
}

.fs-table-wrap {
  max-height: 260px;
  overflow: auto;
  padding: 0;
}

.fs-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.fs-table th,
.fs-table td {
  padding: 6px 10px;
  text-align: left;
  border-bottom: 1px solid #2d3328;
}

.fs-table th {
  color: #c4b550;
  position: sticky;
  top: 0;
  background: #3e4637;
  z-index: 1;
}

.fs-table tr:hover td {
  background: rgba(90, 106, 80, 0.35);
}

.fs-table tr.active td {
  background: rgba(150, 137, 45, 0.25);
}

.fs-status {
  margin: 10px 0 0;
  font-size: 12px;
  color: #b8c4ad;
}
</style>
