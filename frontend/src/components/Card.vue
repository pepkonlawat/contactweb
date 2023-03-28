<script setup></script>
<template>
  <div class="ui card">
    <div class="image">
      <img src="../assets/kristy.png" />
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>

      <div class="description">
        <div>Mobile: {{ mobile }}</div>
        <div>Email: {{ email }}</div>
        <div>Facebook: {{ facebook }}</div>
      </div>
    </div>

    <div class="extra content">
      <button class="ui blue icon button">
        <i class="edit icon"></i>
      </button>
      <button class="ui red icon button">
        <i class="trash alternate icon"></i>
      </button>
    </div>
  </div>
</template>
<style></style>
