<template>
  <div class="app-header">
    <span>Clients</span>
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
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
}

span {
  color: #006994;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.75rem 0;
}
</style>
