<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import CardContact from "../components/Card.vue";
const contacts = ref({
  cid: "",
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  facebook: "",
  imageUrl: "",
});
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
</script>
<template>
  <div class="ui link cards">
    <CardContact
      v-for="(contact, index) in contacts"
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
