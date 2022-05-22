<template>
  <div class="table-header">
    <header class="header-item">Name</header>
    <header class="header-item">Email</header>
    <header class="header-item">Phone</header>
    <header class="header-item">Providers</header>
    <header class="header-item"></header>
  </div>
</template>

<style scoped>
  .table-header {
    display: grid;
    grid-template-columns: 20% 20% 20% 30% 10%;
  }

  .header-item {
    border: 1px lightgray solid;
    padding: 0.5rem;
    padding-bottom: 0.3rem;
  }
</style>