<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import CardContact from "../components/Card.vue";
import Search from "../components/Search.vue";
const contacts = ref([]);
onMounted(async () => {
  const url = "http://127.0.0.1:5001/contacts";
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      contacts.value = response.data;
    })
    .catch((error) => {
      console.log(error.message);
    });
});
const searchInput = ref("");
function handleSearch(term) {
  searchInput.value = term;
}
const filteredList = computed(() => {
  return contacts.value.filter((item) =>
    item.firstname.toLowerCase().includes(searchInput.value.toLowerCase())
  );
});
s;
</script>
<template>
  <Search @search="handleSearch" />

  <div id="card-box" class="ui segment link cards">
    <CardContact
      v-for="contact in filteredList"
      :key="contact.cid"
      :firstname="contact.firstname"
      :lastname="contact.lastname"
      :mobile="contact.mobile"
      :email="contact.email"
      :facebook="contact.facebook"
      :imageUrl="contact.imageUrl"
    />
  </div>
</template>
<style>
#card-box {
  margin: 10px;
  align-items: center;
  justify-content: center;
}
</style>
