<template>
  <div :class="['quote', 'box', boxClass]">
    <blockquote>
      <p>{{ quote.text }}</p>
      <div class="attribution">
        <p class="name">
          {{ quote.attribution }}
        </p>
        <p class="client">
          {{ quote.client.name }}
        </p>
      </div>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      required: true,
    },
    boxClass: {
      type: String,
      default: "",
    },
  },
};
</script>
