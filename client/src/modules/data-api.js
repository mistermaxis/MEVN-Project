import { reactive, toRefs } from 'vue';

export default function useClients() {
  const state = reactive({
    clients: [],
    providers: [],
    error: null
  });

  const load = async () => {
    try {
      const res = await fetch('http://localhost:4000/clients');
      const jsonResponse = await res.json();
      state.clients = jsonResponse.clients;
      state.providers = jsonResponse.providers;
    } catch (e) {
      state.error = e;
    }
  };

  return { ...toRefs(state), load }
}