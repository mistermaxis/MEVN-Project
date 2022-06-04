<template>
  <div>
    <div v-if="state.error" class="fetch-error">{{ state.error }}</div>
    <div class="client-table" v-else-if="state.clients" v-for="client in state.clients" :key="client._id">
      <span :title="client.name" class="table-item word-break">{{ client.name }}</span>
      <span :title="client.email" class="table-item ellipsis">{{ client.email }}</span>
      <span :title="client.phone" class="table-item">{{ client.phone }}</span>
      <div class="table-item">
        <span class="word-break">
          {{state.providers.filter(p => client.providers.includes(p._id))
          .map(p => p.name).join(', ')}}</span>
      </div>
      <div class="edit"><a href="#">Edit</a></div>
    </div>
  </div>
</template>

<script setup>
import useClients from '../modules/data-api';

const { state, load } = useClients();

await load();
</script>

<style scoped>
.client-table {
  display: grid;
  grid-template-columns: minmax(10%, 18%) minmax(15%, 24%) minmax(15%, 18%) minmax(20%, 40%) minmax(2.5rem, 3rem);
}

.table-item {
  border-color: lightgray;
  border-style: solid;
  border-width: 0px 0px 1px 1px;
  padding: 0.5rem;
}

.edit {
  border-color: lightgray;
  border-style: solid;
  border-width: 0px 1px 1px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edit > a {
  color: darkslategray;
  text-align: center;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.word-break {
  word-break: break-all;
}
</style>