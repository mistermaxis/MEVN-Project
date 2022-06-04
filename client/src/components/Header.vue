<template>
  <div class="app-header">
    <h1>Clients</h1>
    <button class="button" @click="isOpen = true" type="button">New Client</button>
    <Teleport to="#modal">
      <NewClientModal v-if="isOpen" @on-create-close="isOpen = false"/>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NewClientModal from './NewClientModal.vue';

const isOpen = ref(false);
</script>

<style scoped>
.button {
  border-color: lightgray;
  border-width: 1px;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}

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
