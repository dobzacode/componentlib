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
        headingFS: "3.2rem",
        subHeadingFS: "2.8rem",
        bodyFS: "1.6rem",
      },
    },
  },
  plugins: [],
};
