<template>
  <Header />
  <TableHeader />
  <Suspense>
    <template #default>
      <ClientTable />
    </template>
    <template #fallback>
      Loading
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 5%;
}
</style>
