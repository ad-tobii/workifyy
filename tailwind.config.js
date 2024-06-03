/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // 1em = 16px
        xsMobile: { max: "20em" }, // max: 320px
        miniMobile: { max: "25.75em" }, // min: 360px, max: 412px
        mobile: { max: "25.875em" }, // max: 414px
        miniTablet: { min: "425px", max: "31.25em" }, // min: 425px, max: 500px
        tablet: { max: "37.5em" }, // max: 600px
        miniLaptop: { max: "42em" }, // max: 672px
        laptop: { max: "56.25em" }, // min: 601px, max: 900px
        desktop: { max: "75em" }, // min: 901px, max: 1200px
      },
      fontFamily: {
        logoFonts: "Rubik Maps, system-ui;",
      },
    },
  },
  plugins: [],
};
