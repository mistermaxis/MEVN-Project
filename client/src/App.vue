<template>
  <Header />
  <TableHeader />
  <Suspense>
    <template #default>
      <ClientTable />
    </template>
  </Suspense>
</template>

<script setup>
import Header from './components/Header.vue';
import TableHeader from './components/TableHeader.vue';
import ClientTable from './components/ClientTable.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 5%;
}
</style>
