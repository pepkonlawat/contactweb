<script setup>
import { ref, defineProps } from "vue";
import axios from "axios";
// import Infoform from "../components/Infoform.vue";
// const formInput = ref({});
// onMounted(async () => {
//   var url = "http://127.0.0.1:5001/users/"+ this.$route.params.userId;
//   axios.get(url).then((response) => {
//     console.log(response)
//     formInput.value = response.data;
//   }).catch((error) => {console.log(error)
// });
// function handleForm(term) {
//   formInput.value = term;
//   var url = "http://127.0.0.1:5001/contacts";
//   axios
//     .post(url, formInput.value)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.error();
//     });
// }
const props = defineProps({
  key: String,
});
</script>
<template>
  <div id="form-box" class="ui segment">
    <h2 class="ui header">
      Contact
      <a class="ui teal label">Add</a>
    </h2>
    <!-- {{ formInput }}
    <Infoform @getForm="handleForm" /> -->
  </div>
</template>
<style scoped></style>
