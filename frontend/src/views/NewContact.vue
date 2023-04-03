<script setup>
import { ref } from "vue";
import axios from "axios";
import Infoform from "../components/Infoform.vue";
const dataInForm = ref({});
function addNewContact() {
  var url = "http://127.0.0.1:5001/Contacts";
  axios
    .post(url, dataInForm.value)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error();
    });
}
</script>
<template>
  <div id="form-box" class="ui segment">
    <h2 class="ui header">
      Contact
      <a class="ui teal label">Add</a>
    </h2>
    <Infoform />
  </div>
</template>
<style scoped></style>
