<template>
  <section id="main">
    <div class="max-w-container mx-auto p-6 md:p-12 my-0">
      <h2 class="section-title">Projects</h2>
      <div id="tag-buttons">
        <button class="btn btn-on reset" @click="selectTag(null)">All</button>
        <TagButton
          v-for="tag in data.allCategories"
          :key="tag.slug"
          :tag="tag"
          :selectedTag="selectedTag"
          :onSelect="selectTag" />
      </div>
      <section id="projects" class="grid project-list">
        <ProjectItem
          v-for="(project, index) in filteredProjects"
          :key="index"
          :project="project" />
      </section>
    </div>
  </section>
</template>
<script setup>
const QUERY = `
  query {
    allProjects {
      clients {
        name
      }
      credits {
        ... on CreditRecord {
          contributor {
            name
          }
          role
        }
      }
      date
      description
      featured
      link
      position
      services {
        name
      }
      title
      images {
        url
      }
      tags {
        title
        slug
      }
    }
    allCategories {
      slug
      title
    }
  }
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });

const selectedTag = ref(null);

const selectTag = (tagSlug) => {
  console.log("selectTag called with:", tagSlug); // Add this line
  if (selectedTag.value === tagSlug) {
    selectedTag.value = null;
  } else {
    selectedTag.value = tagSlug;
  }
};

watch(data, (newData) => {
  if (newData) {
    state.allProjects = newData.value.allProjects;
    state.tags = newData.value.allCategories;
    // Add your filtering logic here
    console.log("State after update:", state);
  }
});
const filteredProjects = computed(() => {
  if (!data.value || !selectedTag.value)
    return data.value ? data.value.allProjects : [];
  const filtered = data.value.allProjects.filter((project) =>
    project.tags.some((tag) => tag.slug === selectedTag.value)
  );
  console.log("Filtered Projects:", filtered); // Add this line
  return filtered;
});
</script>
