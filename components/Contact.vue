<script setup>
import SocialLinks from "./SocialLinks.vue";

const QUERY = `query { allServices { name } }`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>

<template>
  <section id="contact">
    <h2 class="section-title">Get in touch!</h2>
    <SocialLinks />
    <div class="max-w-container mx-auto p-6 md:p-12 my-0">
      <form
        class="contact"
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        action="/thank-you"
        netlify>
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div class="select">
          <select name="service">
            <option disabled selected>
              What service are you interested in?
            </option>
            <option v-for="service in data.allServices" :value="service.name">
              {{ service.name }}
            </option>
          </select>
        </div>
        <div class="textbox">
          <textarea
            name="message"
            rows="4"
            placeholder="Briefly describe what you are looking for."
            required />
        </div>
        <div class="textbox">
          <input type="text" name="name" placeholder="Your name" required />
        </div>
        <div class="textbox">
          <input
            type="email"
            name="email"
            placeholder="you@youremail.com"
            required />
        </div>
        <button class="btn btn-primary" type="submit">Send</button>
      </form>
    </div>
  </section>
</template>
