<script setup>
import SteamIcon from '@/components/box/partials/SteamIcon.vue';
import Btn from '@/components/Btn.vue';

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
        <Btn label="X" />
      </div>
    </div>

    <div class="box_content">
      <slot name="content"></slot>
    </div>

    <div class="box_footer">
      <slot name="footer"></slot>
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
  max-height: 400px;
}

/* SCROLL
.box_content::-webkit-scrollbar {
  width: 15px;
}

.box_content::-webkit-scrollbar-thumb {
  background-color: var(--color-green);
  border-left: 1px solid var(--color-border-green);
  border-top: 1px solid var(--color-border-green);
  border-right: 1px solid var(--color-border-green);
  border-bottom: 1px solid var(--color-border-green);

}

.box_content::-webkit-scrollbar-track {
  background-color: var(--color-green-light);
}
*/

.box_close {
  margin-right: 10px;
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