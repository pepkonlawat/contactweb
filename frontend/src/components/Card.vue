<script setup>
const props = defineProps({
  firstname: String,
  lastname: String,
  mobile: String,
  email: String,
  facebook: String,
  imageUrl: String,
});
</script>
<template>
  <div class="ui card">
    <div class="image">
      <img :src="props.imageUrl" />
      <!-- ../assets/kristy.png -->
    </div>
    <div class="content">
      <div class="header">{{ props.firstname }} {{ props.lastname }}</div>

      <div class="description">
        <div>Mobile: {{ props.mobile }}</div>
        <div>Email: {{ props.email }}</div>
        <div>Facebook: {{ props.facebook }}</div>
      </div>
    </div>

    <div class="extra content">
      <router-link to="/EditContact">
        <button class="ui blue icon button">
          <i class="edit icon"></i>
        </button>
      </router-link>
      <button class="ui red icon button">
        <i class="trash alternate icon"></i>
      </button>
    </div>
  </div>
</template>
<style>
.content {
  text-align: center;
}
</style>
