<template>
  <button
    class="btn btn-tag"
    :class="{ 'btn-on': isActive, 'btn-off': !isActive }"
    @click="handleClick">
    {{ tag.title }}
  </button>
</template>

<script setup>
const props = defineProps({
  tag: Object,
  selectedTag: String,
  onSelect: Function,
});

const isActive = computed(() => props.selectedTag === props.tag.slug);

const selectTag = () => {
  console.log("TagButton selectTag called with:", props.tag.slug); // Add this line
  props.onSelect(props.tag.slug);
};

const handleClick = () => {
  console.log("Button clicked!"); // Add this line
  selectTag();
};
</script>
