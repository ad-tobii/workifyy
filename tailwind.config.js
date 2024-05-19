/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    
      colors: {
        primaryColor: "#32CD32",
      },
      maxWidth: {
        containerWidth: "1250px",
        textWidth: "55rem",
        paragraphText:"35rem",
      },
      padding: {
        paddingBtn: "0.65rem 1rem",

      },

      backgroundImage: {
        heropattern: "url('/assests/HeroSection.jpg')",
      },
      backgroundSize:{
      clientSection:"75rem",
      },
      

      width: {
        logoWidth: "8rem",
        heroWidth: "40rem",
      },
      height:{
       heroHeight:"100vh",
       clientSectionHeight:"60vh",
       overlayHeight:"100vh"
      },
      fontFamily: {
        logoFonts: "Rubik Maps, system-ui;",
      },
    },
  },
  plugins: [],
};
