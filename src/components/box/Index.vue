<script setup>
import SteamIcon from '@/components/box/partials/SteamIcon.vue';
import CloseBtn from '@/components/box/partials/CloseBtn.vue';

defineProps({
  propTitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="box">
    <div class="box_header">
      <div class="box_title">
        <SteamIcon /> {{ propTitle }}
      </div>
      <div class="box_close">
      </div>
    </div>

    <div class="box_content">
    </div>

    <div class="box_footer">
    </div>
  </div>
</template>

<style scope>
.box{
  display: flex;
  flex-direction: column;
  min-height: 400px;
  max-width: 1000px;
  background-color: var(--color-green);
  border: 2px solid var(--color-border-green);
  border-radius: 2px;
  padding: 10px;
}

.box_header {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  color: var(--color-white);
}

.box_content {
  margin: 5px 0px;
}

.box_footer {
  justify-content: flex-end;
  height: 35px;
  margin-right: 10px;
  margin-top: auto;
  display: flex;
}

.box_title {
  display: flex;
  align-items: center;
}
</style>