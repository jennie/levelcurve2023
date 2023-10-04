<script setup>
const QUERY = `
  query 
    {
  allPeople(filter: {friend: {eq: true}}) {
    bio(markdown: true)
    name    
    title
    twitter
    photo {
      url(
        imgixParams: {blendMode: normal, fit: facearea, facepad: "220", w: "300", h: "300", auto: compress}
      )
    }
  }
}
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>
<template>
  <section id="friends">
    <h2 class="section-title">Friends of Level Curve</h2>
    <div
      class="inner flex flex-wrap md:grid md:grid-cols-2 gap-12 mx-auto p-6 md:p-12 my-0 max-w-5xl">
      <div
        v-for="person in data.allPeople"
        key="person.id"
        class="person my-12 mx-auto max-w-5xl lg:gap-16">
        <div class="name text-center">
          <h2>{{ person.name }}</h2>
          <h3>{{ person.title }}</h3>
          <p class="twitter py-4" v-if="person.twitter">
            <a
              class="btn btn-primary"
              :href="'https://twitter.com/' + person.twitter"
              >{{ person.twitter }}</a
            >
          </p>
          <div class="headshot justify-center flex">
            <nuxt-img
              v-if="person.photo"
              :src="person.photo.url"
              class="max-full" />
          </div>
        </div>
        <div class="bio max-w-sm" v-if="person.bio" v-html="person.bio" />
      </div>
    </div>
  </section>
</template>
<style>
#friends {
  background-image: url("/img/black_curve.svg");

  .person {
    .bio {
      @apply p-6 bg-peach mt-8 text-white;
      border: solid 3px theme(colors.light-gray);
      box-shadow: 10px 10px 0px 0px #fff;
      & p {
        @apply text-base mb-2;

        &:last-child {
          @apply m-0;
        }
      }
    }

    .name {
      @apply text-center;

      & h2,
      & h3 {
        @apply m-0 text-peach;
      }

      & h2 {
        @apply text-3xl;
      }
    }
  }
}
</style>
