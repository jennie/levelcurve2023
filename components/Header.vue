<template>
  <div id="banner">
    <div
      class="flex flex-wrap justify-space-between items-flex-start p-12 max-w-container mx-auto">
      <nuxt-img
        src="/img/level_curve_logo.svg"
        class="block mx-auto md:mx-0 max-w-full" />
      <nav class="lg:ml-auto my-4 w-full mx-auto md:mx-0 md:w-auto">
        <ul class="menu">
          <li><a class="about" href="/#about">About</a></li>
          <li><a class="projects" href="/#main">Projects</a></li>
          <li><a class="team" href="/#team">Team</a></li>
          <li><a class="contact" href="/#contact">Contact</a></li>
        </ul>
      </nav>
      <div
        class="tagline font-mono font-normal text-2xl md:text-3xl lg:text-4xl italic lg:mt-8 lg:pt-8"
        v-html="data.homePage.copy" />
    </div>
  </div>
</template>
<script setup>
const QUERY = `
  query {
    homePage {
      copy(markdown: true)
    }
  }
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>
<style scoped>
#banner {
  @apply bg-white;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 19%,
    rgba(246, 243, 249, 0) 100%
  );

  & .tagline {
    & p {
      @apply m-0;
    }
  }
}

nav {
  transition: all 0.5s cubic-bezier(0.03, 0.82, 0.34, 0.99);

  & ul {
    @apply flex flex-wrap justify-between m-0 p-0 w-full items-center relative pointer-events-auto mx-auto;

    & li {
      list-style: none;
      margin-bottom: 0;

      & a {
        @apply text-center block transition-all rounded-full md:h-24 md:w-24 md:leading-[6rem] text-white font-bold;

        color: inherit;
        font-size: 1rem;
        transition-timing-function: cubic-bezier(0.03, 0.82, 0.34, 0.99);
        box-shadow: inset 0 0 0 2.5px transparent;
        &:hover {
          @apply md:bg-white;
        }
      }
    }
  }
}

@define-mixin hover $name, $color {
  @media screen and (min-width: 768px) {
    nav ul li a.$(name):hover {
      color: $color;
      box-shadow: inset 0 0 0 2.5px $color;
    }
  }
}

@mixin hover about, theme(colors.pink);
@mixin hover projects, theme(colors.primary);
@mixin hover team, theme(colors.yellow);
@mixin hover contact, theme(colors.blue);
</style>
