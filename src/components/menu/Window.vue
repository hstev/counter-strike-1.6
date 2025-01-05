<script setup>
defineProps({
  propTitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="window__box">

    <div class="window__box_header">
      <div class="window__box_title">[ICON] {{ propTitle }}</div>
      <div class="window__box_close">X</div>
    </div>

    <div class="window__box_content">
    </div>

    <div class="window__box_footer">
    </div>
  </div>
</template>

<style scope>
.window__box{
  display: flex;
  flex-direction: column;
  min-height: 400px;
  max-width: 1000px;
  background-color: var(--color-green);
  border: 2px solid var(--color-border-green);
  border-radius: 2px;
  padding: 10px;
}

.window__box_header {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  color: var(--color-white);
}

.window__box_close {
  cursor: pointer;
  border: 1px solid var(--color-white);
  border-radius: 3px;
  padding: 3px;
}

.window__box_content {
  margin: 5px 0px;
}

.window__box_footer {
  justify-content: flex-end;
  height: 35px;
  margin-right: 10px;
  margin-top: auto;
  display: flex;
}
</style>