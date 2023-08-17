module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./**/*.vue",
    "./tailwind-theme.js",
  ],
  theme: {
    extend: {
      spacing: {
        primary: "24px",
      },
      maxWidth: {
        container: "1200px",
        narrow: "800px",
      },
      fontFamily: {
        body: ["IBM Plex Sans", "sans-serif"],
        display: ["Space Mono", "monospace"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        primary: "#4848F0",
        blue: "#00AEEF",
        yellow: "#FFF200",
        lime: "#E1F1A0",
        pink: "#EC008C",
        purple: "#C4BAF2",
        "light-gray": "#F6F3F9",
      },
    },
  },
  variants: {},
  plugins: [],
};
