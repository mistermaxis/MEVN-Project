<template>
  <div class="provider-container">
    <div name="provider-list" class="provider-list border-gray">
      <div
        class="provider-item"
        v-if="state.providers"
        v-for="provider in state.providers"
      >
        <div name="provider-checkbox">
          <input
            class="provider"
            type="checkbox"
            :name="provider.name"
            :id="provider._id"
            :checked="props.clientProviders.includes(provider._id)"
          />
          <label :for="provider._id">{{ provider.name }}</label>
        </div>
        <form @submit="(e) => submitUpdate(e)" name="provider-text" hidden>
          <span hidden name="provider-id">{{ provider._id }}</span>
          <input type="text" name="update-provider" />
        </form>
        <div>
          <button @click="(e) => editProvider(e)" class="icon-button">
            <img src="../assets/edit.png" alt="Edit Provider" />
          </button>
          <button @click="deleteProvider(provider._id)" class="icon-button">
            <img src="../assets/delete.png" alt="Delete Provider" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useClients from "../modules/data-api";
const { state, destroyProvider, updateProvider } = useClients();

const props = defineProps({
  clientProviders: {
    type: Array,
    default: [],
  },
});

async function deleteProvider(id) {
  await destroyProvider(id);
}

async function editProvider(e) {
  const parentList = e.currentTarget.parentElement.parentElement;
  const providerCheckbox = parentList.children["provider-checkbox"];
  const providerText = parentList.children["provider-text"];
  providerCheckbox.setAttribute("hidden", "true");
  providerText.removeAttribute("hidden");
}

async function submitUpdate(e) {
  e.preventDefault();
  const formUpdate = e.currentTarget;
  const updatedProvider = formUpdate.children["update-provider"].value;
  const providerId = formUpdate.children["provider-id"].innerText;
  const providerObject = {
    name: updatedProvider,
  };
  await updateProvider(JSON.stringify(providerObject), providerId);
  formUpdate.reset();

  const formParent = formUpdate.parentElement;
  formParent.children["provider-checkbox"].removeAttribute("hidden");
  formParent.children["provider-text"].setAttribute("hidden", true);
}
</script>

<style scoped>
.provider-container {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}

.provider-list {
  min-width: 10%;
  max-width: min(30rem, 74%);
  flex-grow: 1;
  max-height: 5rem;
  overflow-y: scroll;
  padding: 2%;
}

.provider-item {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
}

.provider-item > div > * {
  padding: 0.1rem 0.5rem;
}

.border-gray {
  border: 1px solid lightgray;
  border-radius: 0.5rem;
}

.icon-button {
  border: none;
  background: none;
  justify-self: end;
}

.icon-button img {
  width: 0.75rem;
  opacity: 70%;
  user-select: none;
}
</style>
