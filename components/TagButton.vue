<template>
  <button
    class="btn btn-tag m-1"
    :class="{ 'btn-on': isActive, 'btn-off': !isActive }"
    @click="selectTag">
    {{ tag.title }}
  </button>
</template>

<script setup>
const props = defineProps({
  tag: Object,
  selectedTags: Array,
  onSelect: Function,
});

const isActive = computed(() => {
  if (props.selectedTags) {
    return props.selectedTags.includes(props.tag.slug);
  }
  return false;
});

const selectTag = () => {
  props.onSelect(props.tag.slug);
};
</script>
