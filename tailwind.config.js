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
        miniTablet: { max: "31.25em" }, // min: 425px, max: 500px
        tablet: { max: "37.5em" }, // max: 600px
        miniLaptop: { max: "42em" }, // max: 672px
        laptop: { max: "56.25em" }, // min: 601px, max: 900px
        desktop: { max: "75em" }, // min: 901px, max: 1200px
      },
      colors: {
        primaryColor: "#32CD32",
      },
      maxWidth: {
        containerWidth: "1250px",
        textWidth: "55rem",
        paragraphText: "35rem",
      },
      padding: {
        paddingBtn: "0.65rem 1rem",
      },

      backgroundImage: {
        heropattern: "url('/assests/HeroSection.jpg')",
      },
      backgroundSize: {
        clientSection: "75rem",
      },

      width: {
        logoWidth: "8rem",
        heroWidth: "40rem",
      },
      height: {
        heroHeight: "100vh",
        clientSectionHeight: "60vh",
        overlayHeight: "100vh",
      },
      fontFamily: {
        logoFonts: "Rubik Maps, system-ui;",
      },
    },
  },
  plugins: [],
};
