<template>
  <section id="contact">
    <h2 class="section-title">Get in touch!</h2>
    <div class="max-w-container mx-auto p-6 md:p-12 my-0">
      <form
        class="contact"
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        action="thank-you"
        netlify>
        <input name="bot-field" style="display: none" />
        <div class="select">
          <select name="service">
            <option disabled selected>
              What service are you interested in?
            </option>
            <option
              each="loop=service in dato.service"
              value="{{ service.name }}">
              {{ service.name }}
            </option>
          </select>
        </div>
        <div class="textbox">
          <label for="message">Tell us a bit about your project</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Briefly describe what you are looking for."
            required></textarea>
        </div>
        <div class="textbox">
          <label for="name">Your name</label>
          <input type="text" name="name" placeholder="Your name" required />
        </div>
        <div class="textbox">
          <label for="email">Your email</label>
          <input
            type="email"
            name="email"
            placeholder="you@youremail.com"
            required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
</template>
