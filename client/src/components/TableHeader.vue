<template>
  <div class="table-header">
    <header title="Name" class="header-item">Name</header>
    <header title="Email" class="header-item">Email</header>
    <header title="Phone" class="header-item">Phone</header>
    <header title="Providers" class="header-item">Providers</header>
    <header class="header-item"></header>
  </div>
</template>

<style scoped>
.table-header {
  display: grid;
  grid-template-columns: minmax(10%, 18%) minmax(15%, 24%) minmax(15%, 18%) minmax(20%, 40%) minmax(2.5rem, 3rem);
  font-weight: bold;
}

.header-item {
  border-color: gray;
  border-style: solid;
  border-width: 1px 0px 1px 1px;
  padding: 0.5rem;
  padding-bottom: 0.3rem;
  word-break: break-all;
}

.header-item:last-of-type {
  border-right: 1px solid
}
</style>