const HEADING_EXTRA_LARGE_SIZE = "12.8rem";
const HEADING_LARGE_SIZE = "6.4rem";
const HEADING_SIZE = "3.2rem";
const SUBHEADING_SIZE = "2.4rem";
const BODY_SIZE = "1.8rem";
const PRIMARY_COLOR_RGB = "100,149,237";

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
        primary0: `rgba(${PRIMARY_COLOR_RGB}, 1)`,
        primary10: `rgba(${PRIMARY_COLOR_RGB}, 0.90)`,
        primary20: `rgba(${PRIMARY_COLOR_RGB}, 0.80)`,
        primary30: `rgba(${PRIMARY_COLOR_RGB}, 0.70)`,
        primary40: `rgba(${PRIMARY_COLOR_RGB}, 0.60)`,
        primary50: `rgba(${PRIMARY_COLOR_RGB}, 0.50)`,
        primary60: `rgba(${PRIMARY_COLOR_RGB}, 0.40)`,
        primary70: `rgba(${PRIMARY_COLOR_RGB}, 0.30)`,
        primary80: `rgba(${PRIMARY_COLOR_RGB}, 0.20)`,
        primary90: `rgba(${PRIMARY_COLOR_RGB}, 0.10)`,
        primary100: `rgba(${PRIMARY_COLOR_RGB}, 0.01)`,
      },
      fontSize: {
        headingExtraLargeFS: HEADING_EXTRA_LARGE_SIZE,
        headingLargeFS: HEADING_LARGE_SIZE,
        headingFS: HEADING_SIZE,
        subHeadingFS: SUBHEADING_SIZE,
        bodyFS: BODY_SIZE,
      },
      lineHeight: {
        headingExtraLargeLH: HEADING_EXTRA_LARGE_SIZE,
        headingLargeLH: HEADING_LARGE_SIZE,
        headingLH: HEADING_SIZE,
        subHeadingLH: SUBHEADING_SIZE,
        bodyLH: BODY_SIZE,
      },
    },
  },
  plugins: [],
};
