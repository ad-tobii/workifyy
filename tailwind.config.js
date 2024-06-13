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
        Lmobile: { min: "415px", max: "598px" },
        miniTablet: { min: "425px", max: "31.25em" }, // min: 425px, max: 500px
        tablet: { max: "37.5em" }, // max: 600px
        tabs: { min: "599px", max: "692px" },
        pads: { min: "693px", max: "1150px" },
        miniLaptop: { max: "42em" }, // max: 672px
        laptop: { max: "56.25em" }, // min: 601px, max: 900px
        desktop: { max: "75em" }, // min: 901px, max: 1200px
        Lscreens: { min: "1400px" },
        dmobile: { max: "424px" },
        lscreens: { min: "675px", max: "754px" },
        midscreens: { min: "500px", max: "674px" },
        limit:{min:"754px"},
      },
      fontFamily: {
        logoFonts: "Rubik Maps, system-ui;",
      },
    },
  },
  plugins: [],
};
