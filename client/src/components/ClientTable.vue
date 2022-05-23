<template>
  <div>
    <p v-for="provider in providers">{{provider.name}}</p>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script setup>
import useClients from '../modules/data-api';

const { providers, error, load} = useClients();

await load();
</script>