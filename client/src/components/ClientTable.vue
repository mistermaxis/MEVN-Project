<template>
  <div>
    <div v-if="state.error" class="fetch-error">{{ state.error }}</div>
    <div class="client-table" v-else-if="state.clients" v-for="client in state.clients" :key="client._id">
      <span :title="client.name" class="table-item word-break">{{ client.name }}</span>
      <span :title="client.email" class="table-item ellipsis">{{ client.email }}</span>
      <span :title="client.phone" class="table-item">{{ client.phone }}</span>
      <div class="table-item">
        <span class="word-break">
          {{
              state.providers
                .filter((p) => client.providers.includes(p._id))
                .map((p) => p.name)
                .join(", ")
          }}</span>
      </div>
      <div class="edit">
        <button class="edit-button" @click="editOpen = client._id">Edit</button>
        <Teleport to="#modal">
          <EditClientModal :client=client v-if="editOpen == client._id" @on-edit-close="editOpen = null" />
        </Teleport>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useClients from "../modules/data-api";
import EditClientModal from "./EditClientModal.vue";

const { state, load } = useClients();
const editOpen = ref(0);

await load();
</script>

<style scoped>
.fetch-error {
  text-align: center;
  padding: 1.25rem 0;
  color: red;
}

.client-table {
  display: grid;
  grid-template-columns: minmax(10%, 18%) minmax(15%, 24%) minmax(15%, 18%) minmax(20%,
      40%) minmax(2.5rem, 3rem);
}

.table-item {
  border-color: lightgray;
  border-style: solid;
  border-width: 0px 0px 1px 1px;
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
}

.edit {
  border-color: lightgray;
  border-style: solid;
  border-width: 0px 1px 1px 1px;
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.edit-button {
  flex-grow: 1;
  border: none;
  background: none;
  color: #006994;
  text-decoration: underline;
  cursor: pointer;
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
