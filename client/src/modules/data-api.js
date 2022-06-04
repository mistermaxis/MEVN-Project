import { readonly, ref } from 'vue';

const state = ref({
  clients: [],
  providers: [],
  error: null
});

export default function useClients() {

  async function load() {
    try {
      const res = await fetch('http://localhost:4000/clients');
      const jsonResponse = await res.json();
      state.value.clients = jsonResponse.clients;
      state.value.providers = jsonResponse.providers;
    } catch (e) {
      state.value.error = e;
    }
  }

  async function insertClient(newClient) {
    try {
      const res = await fetch('http://localhost:4000/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: newClient,
      });
      await res.json();
      await load();
    } catch (e) {
      console.log(e);
    }
  }

  async function insertProvider(newProvider) {
    try {
      const res = await fetch('http://localhost:4000/providers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: newProvider,
      });
      await res.json();
      await load();
      console.log(state.value.providers);
    } catch (e) {
      console.log(e);
    }
  }

  async function updateProvider(newProvider, providerId) {
    try {
      const res = await fetch(`http://localhost:4000/providers/${providerId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: newProvider,
      });
      await res.json();
      await load();
    } catch (e) {
      console.log(e);
    }
  }

  async function destroyProvider(providerId) {
    try {
      const res = await fetch(`http://localhost:4000/providers/${providerId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      await res.json();
      await load();
    } catch (e) {
      console.log(e);
    }
  }

  return {
    state: readonly(state),
    load,
    insertClient,
    insertProvider,
    destroyProvider,
    updateProvider
  }
}