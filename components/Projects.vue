<template>
  <section id="main" ref="projectSection">
    <div class="max-w-container mx-auto p-6 md:p-12 my-0">
      <h2 class="section-title">Projects</h2>
      <div id="tag-buttons" ref="tagButtons">
        <button
          class="btn reset"
          :class="{
            'btn-on': selectedTags.length === 0,
            'btn-off': selectedTags.length > 0,
          }"
          @click="selectAllTags">
          All
        </button>
        <TagButton
          v-for="tag in data.allCategories"
          :key="tag.slug"
          :tag="tag"
          :selectedTags="selectedTags"
          :onSelect="selectTag" />
      </div>
      <div v-if="filteredProjects.length === 0">
        <p class="font-display text-2xl text-center text-pink mt-12">
          No projects found for the selected tags.
        </p>
      </div>

      <transition-group
        name="project-fade"
        tag="section"
        mode="out-in"
        id="projects"
        class="flex flex-wrap mt-6 md:mt-48 md:grid md:grid-cols-2 lg:grid-cols-4 project-list gap-y-6 md:gap-y-24 gap-x-12">
        <ProjectItem
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :project="project" />
      </transition-group>
    </div>
  </section>
</template>
<script setup>
const QUERY = `
  query {
    allProjects(first: 100,orderBy: date_DESC) {
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

const selectedTags = ref([]);
const selectTag = (tagSlug) => {
  if (selectedTags.value.includes(tagSlug)) {
    selectedTags.value = selectedTags.value.filter((slug) => slug !== tagSlug);
  } else {
    selectedTags.value.push(tagSlug);
  }
  scrollToTags(); // Add this line
};

const filteredProjects = computed(() => {
  if (!data.value || selectedTags.value.length === 0)
    return data.value ? data.value.allProjects : [];
  return data.value.allProjects.filter((project) =>
    selectedTags.value.every((tagSlug) =>
      project.tags.some((tag) => tag.slug === tagSlug)
    )
  );
});
const selectAllTags = () => {
  selectedTags.value = [];
};
const projectSection = ref(null);
const scrollToTags = () => {
  nextTick(() => {
    projectSection.value.scrollIntoView({ behavior: "smooth" });
  });
};
</script>
<style>
#projects {
  .project-fade-enter-active,
  .project-fade-leave-active {
    transition: opacity 0.5s;
  }
  .project-fade-enter-from,
  .project-fade-leave-to {
    opacity: 0;
  }
  .project-fade-enter-to,
  .project-fade-leave-from {
    opacity: 1;
  }

  & .project {
    @apply rounded-sm bg-white mt-24 md:mt-0;

    &.featured {
      grid-column: span 2;
      grid-row: span 2;
      background-color: theme(colors.primary);
      color: #d6d6ff;

      & .cd {
        & img {
          box-shadow: 10px 10px 0px 0px theme(colors.yellow);
        }
      }

      & h4 {
        & span {
          @apply bg-white text-primary;
        }

        border-top: solid 2px #fff;
      }

      & .copy {
        & p b {
          color: #fff;
        }
      }

      & h2 {
        color: #fff;
      }

      & h3 {
        @apply text-primary;
      }
    }

    & .cd {
      display: block;
      margin: calc(theme(spacing.primary) * -2) auto 0 auto;
      text-align: center;

      & img {
        box-shadow: 10px 10px 0px 0px theme(colors.yellow);
        max-width: 50%;
        border: solid 3px theme(colors.light-gray);
      }
    }

    & .copy {
      padding: theme(spacing.primary);

      & p b {
        @apply font-mono font-normal text-primary;
      }

      & .date {
        @apply uppercase text-xs text-center mb-6;
      }
    }

    .title {
      @apply text-2xl;
    }

    .clients {
      @apply text-lg text-primary mb-4;
    }

    & h2,
    & h3 {
      margin: 0;
      text-align: center;
    }

    & h4 {
      & span {
        @apply bg-black text-white p-1 pb-0 inline mb-2;
      }

      border-top: solid 2px #000;
      text-transform: uppercase;
    }

    & .clients {
      & span {
        &:before {
          content: "/";
          padding: 0 8px;
        }

        &:first-child:before {
          padding: 0;
          content: none;
        }
      }
    }

    & .services {
      & span.service {
        &:after {
          content: "+";
          padding: 0 12px;
        }

        &:last-child:after {
          content: "";
        }
      }
    }

    & .credits {
      @apply mt-4;
      & p {
        margin: 0;
      }
    }
  }
}
</style>
