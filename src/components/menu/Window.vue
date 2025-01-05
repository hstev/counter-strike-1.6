<script setup>

</script>

<template>
  <div class="box">
    <div class="header">
      <div class="title">(%) Options</div>
      <div class="close">X</div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo illum cupiditate nesciunt facilis praesentium nostrum maiores temporibus porro consequuntur vitae fugiat, deserunt iusto illo minima velit ut exercitationem ipsa!
    </div>

    <div class="footer">
    </div>
  </div>
</template>


<style scope>
.box{
  display: flex;
  width: 100%;
  min-height: 400px;
  max-width: 1000px;
  background-color: var(--color-green);
  border: 2px solid var(--color-border-green);
  border-radius: 2px;
}

.header {
  width: 100%;
  height: 50px;
  background-color: var(--color-green);
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 1rem;
  color: var(--color-white);
}

.title {
  display: flex;
  align-items: center;
}

.close {
  display: flex;
  align-items: center;
  cursor: pointer;
}

</style>