<script setup>
const QUERY = `
  query 
    {
  allPeople(filter: {teamMember: {eq: true}}) {
    bio(markdown: true)
    name
    teamMember
    title
    twitter
    photo {
      url(
        imgixParams: {blendMode: normal, fit: facearea, facepad: "220", w: "600", h: "1000"}
      )
    }
  }
}
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>
<template>
  <section id="team">
    <h2 class="section-title">Team</h2>
    <div class="inner mx-auto p-6 md:p-12 my-0 md:max-w-3xl lg:max-w-5xl">
      <div
        v-for="person in data.allPeople"
        key="person.id"
        class="person md:grid md:grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] my-12 mx-auto max-w-5xl lg:gap-16">
        <div class="name text-center">
          <h2>{{ person.name }}</h2>
          <h3>{{ person.title }}</h3>
          <p class="twitter py-4" v-if="person.twitter">
            <a
              class="btn btn-primary"
              target="_blank"
              :href="'https://twitter.com/' + person.twitter"
              >{{ person.twitter }}</a
            >
          </p>
          <div class="headshot justify-center flex mt-4">
            <nuxt-img
              v-if="person.photo"
              :src="person.photo.url"
              class="max-full" />
          </div>
        </div>
        <div class="bio" v-if="person.bio" v-html="person.bio" />
      </div>
    </div>
  </section>
</template>
<style>
#team {
  background-image: url("/img/blue_curve.svg");

  .person {
    .bio {
      @apply p-6 bg-peach mt-8 text-white;
      border: solid 3px theme(colors.light-gray);
      box-shadow: 10px 10px 0px 0px #fff;
      & p {
        @apply text-xl mb-4;

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

    @media (min-width: 1024px) {
      @apply grid gap-16;
      grid-template-areas: "name content";
      grid-auto-rows: minmax(100px, 1fr);

      &:nth-child(odd) {
        grid-template-areas: "content name";
        grid-template-columns: 2fr 1fr;
      }

      & .name {
        grid-area: name;
      }

      & .bio {
        grid-area: content;
      }
    }
  }
}
</style>
