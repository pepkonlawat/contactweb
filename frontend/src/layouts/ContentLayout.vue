<template>
  <component :is="Hearder" />
  <component :is="Search" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Search from "../components/Search.vue";
import Hearder from "../components/Header.vue";
</script>
