<template>
  <section id="about">
    <div
      class="max-w-container mx-auto p-6 md:p-8 my-0 flex flex-wrap md:grid md:grid-cols-6 gap-12">
      <div class="about-us box a">
        <div v-html="data.homePage.about" />
      </div>
      <div class="how-we-do box b">
        <h2>What we do</h2>
        <ul class="service-list">
          <li v-for="service in data.allServices">{{ service.name }}</li>
        </ul>
      </div>
      <QuoteBox :quote="data.homePage.featuredQuotes[0]" boxClass="c" />
      <QuoteBox :quote="data.homePage.featuredQuotes[1]" boxClass="d" />
    </div>
  </section>
</template>
<script setup>
const QUERY = `
  query {
    homePage {
      about(markdown: true)
      featuredQuotes {
        attribution
        client {
          name
        }
        text(markdown: false)
      }
    }
    allServices {
      name
    }
  }
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>

<style>
#about {
  h2 {
    @apply text-2xl;
  }

  & .box {
    @apply m-0 w-full p-6 bg-white border-4 border-light-gray text-black md:m-0 mb-6;
    box-shadow: 10px 10px 0px 0px #000;

    & h2 {
      @apply m-0;
    }

    & p {
      @apply mb-2;

      &:last-child {
        @apply m-0;
      }
    }

    & .service-list {
      padding: 0 0 0 13px;
      margin: 0;
      list-style: none;
      text-indent: -13px;

      & li:before {
        content: "– ";
      }
    }

    &.quote {
      @apply bg-pink text-white;
      box-shadow: 10px 10px 0px 0px #000;

      & blockquote {
        padding: 0;
        margin: 0;

        & p {
          @media (--tablet), (--desktop), (--desktop-xl) {
            font-size: 1.2rem;
          }
          color: #fff;
        }

        & .attribution {
          & p {
            font-size: 1rem;
            font-family: "Space Mono", monospace;
            font-style: italic;
            text-align: right;
            margin: 0;

            &.name {
              &:before {
                content: "– ";
              }
            }
          }
        }
      }
    }
  }

  & .a {
    grid-row: 1;
    grid-column: 1 / span 4;
  }

  & .b {
    grid-column: 4 / span 2;
    grid-row: 2 / span 1;
  }

  & .c {
    grid-row: 2 / span 2;
    grid-column: 1 / span 3;
  }

  & .d {
    grid-row: 3 / span 2;
    grid-column: 4 / span 3;
  }
}
</style>
