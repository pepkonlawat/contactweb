<script setup>
import { onMounted } from "vue";
import axios from "axios";
import CardContact from "../components/Card.vue";
onMounted(async () => {});
</script>
<template>
  <div>
    <CardContact
      firstname="Konlawat"
      lastname="Khathaphet"
      mobile="0936941111"
      email="pep.konlawat@gmail.com"
      facebook="Pep Konlawat"
      imageUrl="https://semantic-ui.com/images/avatar2/large/elyse.png"
    />
  </div>
</template>
