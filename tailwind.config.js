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
        textWidth: "42rem",
      },
      padding: {
        paddingBtn: "0.65rem 1rem",
      },
      width: {
        logoWidth: "8rem",
        // heroWidth: "45rem",
        // HeroimgWidth: "66rem",
        // StoriesImage2: "61rem",
        // storiesImages: "26.33rem",
      },
    },
  },
  plugins: [],
};

