<template>
  <div
    class="project w-full"
    :class="project.featured ? 'featured' : ''"
    :data-tags="project.tags.map((a) => a.slug).join(' ')">
    <div class="cd flex justify-center items-center my-0 mx-auto">
      <nuxt-img
        v-if="project.images[0]"
        fit="inside"
        width="400"
        :src="project.images[0].url"
        class="mx-auto" />
      <nuxt-img v-else src="/img/gem.png" class="mx-auto" />
    </div>

    <div class="copy">
      <h2 class="title">{{ project.title }}</h2>
      <h3 class="clients" v-if="project.clients">
        <span v-for="client in project.clients">{{ client.name }}</span>
      </h3>

      <p class="date" v-if="project.date !== null">
        {{ $dayjs(project.date).format("MMMM YYYY") }}
      </p>

      <p class="date" v-else>Coming soon!</p>
      <div class="description" v-if="project.description">
        {{ project.description }}
      </div>
      <div class="services" v-if="project.services.length !== 0">
        <h4><span>Services</span></h4>
        <span v-for="service in project.services" class="service">{{
          service.name
        }}</span>
      </div>
      <div class="credits" v-if="project.credits.length !== 0">
        <h4><span>Credits</span></h4>
        <p v-for="credit in project.credits">
          <span v-if="credit.role">
            <p v-if="credit.contributor">
              {{ credit.role }} by <b>{{ credit.contributor.name }}</b>
            </p>
            <p v-else>
              Featuring <b>{{ credit.contributor }}</b>
            </p>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: Object,
});
</script>
