<script setup>
import { defineEmits, ref } from "vue";
const searchInput = ref();
const emit = defineEmits(["search"]);
function search() {
  emit("search", searchInput.value);
}
</script>
<template>
  <div id="search" class="ui teal segment">
    <div class="ui action input fluid">
      <a class="ui teal ribbon label">Contact</a>
      <input v-model="searchInput" type="text" placeholder="Search..." />
      <button class="ui button" @click="search">Search</button>
      <router-link to="/NewContact">
        <button class="ui orange button Add-btn">+ Add</button>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
#search {
  margin: 10px;
  margin-top: 70px;
}
</style>
