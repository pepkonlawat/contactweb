<script setup>
import { defineEmits, ref } from "vue";
const formInput = ref({
  cid: "",
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  facebook: "",
  imageUrl: "",
});
const emit = defineEmits(["getFrom"]);
function getForm() {
  emit("getFrom", formInput.value);
}
</script>
<template>
  {{ formInput }}
  <div class="ui divider"></div>
  <form class="ui form">
    <div class="field required">
      <label>Contact ID</label>
      <input
        v-model="formInput.cid"
        type="text"
        name="contact-id"
        placeholder="Contact ID"
      />
    </div>
    <div class="field required">
      <label>First Name</label>
      <input
        v-model="formInput.firstname"
        type="text"
        name="first-name"
        placeholder="First Name"
      />
    </div>
    <div class="field required">
      <label>Last Name</label>
      <input
        v-model="formInput.lastname"
        type="text"
        name="last-name"
        placeholder="Last Name"
      />
    </div>
    <div class="field required">
      <label>Mobile No</label>
      <input
        v-model="formInput.mobile"
        type="text"
        name="mobile-no"
        placeholder="Mobile No"
      />
    </div>
    <div class="field">
      <label>Email</label>
      <input
        v-model="formInput.email"
        type="text"
        name="email"
        placeholder="Email"
      />
    </div>
    <div class="field">
      <label>Facebook</label>
      <input
        v-model="formInput.facebook"
        type="text"
        name="facebook"
        placeholder="Facebook"
      />
    </div>
    <div class="field">
      <label>Image Url</label>
      <input
        v-model="formInput.imageUrl"
        type="text"
        name="image-url"
        placeholder="Image Url"
      />
    </div>
    <div class="ui buttons">
      <button @click="getForm" class="ui primary button">Save</button>
      <button class="ui button">Discard</button>
    </div>
  </form>
</template>
<style scoperequiredd>
#form-box {
  margin: 10px;
  margin-top: 70px;
}
</style>
