<template>
  <div class="app-header">
    <h1>Clients</h1>
    <CreateButton></CreateButton>
  </div>
</template>

<script setup>
import CreateButton from "./CreateButton.vue";
</script>

<style scoped>
.app-header {
  background-color: aliceblue;
  border: 1px lightgray solid;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3%;
}

h1 {
  color: darkslategrey;
}
</style>
