<template>
  <div class="social-links flex gap-4 justify-center my-6">
    <a
      href="https://twitter.com/levelcurve"
      target="_blank"
      aria-label="Twitter">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24">
        <!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE -->
        <path
          fill="currentColor"
          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
      </svg>
    </a>
    <!--
    <a
      href="https://www.instagram.com/levelcurve/"
      target="_blank"
      aria-label="Instagram">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
      </svg>
    </a>
    -->
    <a
      href="https://bsky.app/profile/levelcurve.bsky.social"
      target="_blank"
      aria-label="Bluesky">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor">
        <g fill="none">
          <path
            d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M5.892 2.93c-1.78-1.06-3.813.446-3.63 2.359l.398 4.185c.176 1.855 1.84 4.026 4.195 3.823C4.5 14 3.132 15.865 4.88 18.145c.286.373.597.745.914 1.062s.69.628 1.062.914c1.88 1.441 4.375-.65 5.055-2.69l.09-.268l.09.269c.68 2.04 3.174 4.13 5.055 2.689c.372-.286.745-.597 1.062-.914s.628-.69.914-1.062c1.747-2.28.379-4.145-1.976-4.848c2.355.203 4.018-1.968 4.195-3.823l.399-4.185c.182-1.913-1.852-3.418-3.631-2.36C15.2 4.66 13.485 7.393 12 9.902C10.515 7.392 8.8 4.66 5.892 2.93" />
        </g>
      </svg>
    </a>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.social-links svg {
  transition: color 0.3s ease;
  color: #000; /* Black color */
}
.social-links a:hover svg {
  color: #6366f1; /* Change to theme primary color on hover */
}
</style>
