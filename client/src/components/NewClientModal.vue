<template>
  <div class="create-modal-container">
    <div class="modal">
      <div class="modal-header">
        <h2>New Client</h2>
      </div>

      <form @submit="e => addClient(e)" id="create-form" class="new-form" action="">
        <label class="text-right" for="name">Name: </label>
        <input class="form-input" required type="text" name="name" id="name">
        <label class="text-right" for="email">Email: </label>
        <input class="form-input" required type="email" name="email" id="email">
        <label class="text-right" for="phone">Phone: </label>
        <input class="form-input" required type="tel" name="phone" id="phone">
        <label class="text-right" for="provider-name">Providers:</label>
        <form @submit="e => addProvider(e)" class="new-provider">
          <input class="form-input provider-input" required type="text" name="provider-name" id="provider-name">
          <input class="provider-button" type="submit" value="Add Provider">
        </form>
      </form>

      <ProviderList />
      
      <div class="form-menu">
        <button @click="emit('onNewClose')" class="button">Cancel</button>
        <button form="create-form" class="button" type="submit">
          Add Client
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import useClients from '../modules/data-api';
import ProviderList from './ProviderList.vue';
const { insertClient, insertProvider } = useClients();
const emit = defineEmits(['onNewClose']);

async function addClient(e) {
  e.preventDefault();
  
  const checkBoxes = Array.from(document.getElementsByClassName('provider'));
  const providerList = checkBoxes.filter(item => item.checked);
  const providerIds = providerList.map(item => item.id);

  const newClient = {
    name: e.target.children['name'].value,
    email: e.target.children['email'].value,
    phone: e.target.children['phone'].value,
    providers: [...providerIds],
  };

  await insertClient(JSON.stringify(newClient));

  e.target.reset();

  emit('onNewClose');
}

async function addProvider(e) {
  e.preventDefault();
  const newProvider = {
    name: e.target.children['provider-name'].value,
  };
  await insertProvider(JSON.stringify(newProvider));
}
</script>

<style scoped>
.create-modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-header {
  color: darkslategrey;
  border-bottom: 1px solid lightgray;
  padding: 1rem;
}

.modal-header h2 {
  margin: 0;
}

.modal {
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 640px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: white;
  border: 2px lightgray solid;
}

.button {
  border-color: lightgray;
  border-width: 1px;
  border-radius: 0.5rem;
  max-width: 100%;
  padding: 0.5rem 1.4rem;
}

.new-form {
  display: grid;
  grid-template-columns: 30% minmax(30%, 60%);
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
  padding: 1rem;
}

.new-provider {
  display: flex;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
}

.provider-button {
  flex-grow: 1;
  padding: 0.25rem 0;
  max-width: 100%;
  min-width: 6rem;
}

.provider-input {
  min-width: 10%;
  flex-grow: 1;
}

.text-right {
  text-align: right;
  align-self: center;
}

.form-input {
  padding: 0.25rem 0;
  border-radius: 0.25rem;
  border-width: 2px;
  border-style: solid;
}

.form-menu {
  padding: 1rem;
  display: flex;
  column-gap: 0.5rem;
  justify-content: end;
  border-top: 1px lightgray solid;
}
</style>