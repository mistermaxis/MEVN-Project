<template>
  <div>
    <div v-if="error" class="fetch-error">{{ error }}</div>
    <div class="client-table" v-else-if="clients" v-for="client in clients">
      <span class="table-item">{{ client.name }}</span>
      <span class="table-item">{{ client.email }}</span>
      <span class="table-item">{{ client.phone }}</span>
      <span v-for="provider in client.providers" class="table-item">{{ providers.find(p => p._id ==
          provider).name
      }}</span>
      <a class="table-item edit" href="#">Edit</a>
    </div>
  </div>
</template>

<script setup>
import useClients from '../modules/data-api';

const { clients, providers, error, load } = useClients();

await load();
</script>

<style scoped>
.client-table {
  display: grid;
  grid-template-columns: 20% 20% 20% 30% 10%;
}

.table-item {
  border-color: lightgray;
  border-style: solid;
  border-width: 0px 0px 1px 1px;
  padding: 0.5rem;
  padding-bottom: 0.3rem;
}

a.edit {
  border-right: 1px solid lightgray;
}

.edit {
  color: darkslategray;
  text-align: center;
}
</style>