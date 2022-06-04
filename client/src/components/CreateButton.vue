<template>
  <div>
    <button class="button" @click="newOpen = true">New Client</button>
    <Teleport to="#modal">
      <NewClientModal v-if="newOpen" @on-new-close="newOpen = false" />
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NewClientModal from './NewClientModal.vue';

const newOpen = ref(false);
</script>

<style scoped>
.button {
  border-color: lightgray;
  border-width: 1px;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}
</style>