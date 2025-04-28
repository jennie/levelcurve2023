<template>
  <footer class="pt-24 pb-4 text-center text-gray-400">
    <p>© Level Curve 2018-{{ currentYear }}</p>
    <p mdi>
      Made with ♡ by
      <a
        href="https://machinemagic.co"
        target="_blank"
        rel="noopener noreferrer"
        >Machine Magic</a
      >
    </p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.social-links svg {
  transition: color 0.3s ease;
  color: #9ca3af; /* Default gray color matching the footer text */
}

.social-links a:hover svg {
  color: #6366f1; /* Change to theme primary color on hover */
}
</style>
