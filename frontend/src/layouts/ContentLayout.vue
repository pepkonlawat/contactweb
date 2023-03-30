<template>
  <component :is="Hearder" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Hearder from "../components/Header.vue";
</script>
