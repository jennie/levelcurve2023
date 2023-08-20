<template>
  <footer class="pt-24 pb-4 text-center text-gray-400">
    <p>© Level Curve 2018-{{ currentYear }}</p>
    <p mdi>Made with ♡ by jennie</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
