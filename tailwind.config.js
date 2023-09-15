/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobileM: "370px",
      mobileS: "320px",
      mobileL: "425px",
      tablet: "768px",
      laptopL: "1440px",
      laptop: "1024px",
    },
    extend: {
      colors: {
        primary0: "#fffffff",
        primary40: "rgba(0, 0, 0, 0.60)",
      },
      fontSize: {
        headingLarge: "1.6rem",
        headingMedium: "1.4rem",
        headingSmall: "1.2rem",
        titleMedium: "1rem",
        bodyLarge: "1rem",
      },
    },
  },
  plugins: [],
};
