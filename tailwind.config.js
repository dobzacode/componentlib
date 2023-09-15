const HEADING_EXTRA_LARGE_SIZE = "12.8rem";
const HEADING_LARGE_SIZE = "6.4rem";
const HEADING_SIZE = "3.2rem";
const SUBHEADING_SIZE = "2.4rem";
const BODY_SIZE = "1.8rem";
const PRIMARY_COLOR_RGB = "218.54, 69%";
const SECONDARY_COLOR_RGB = "44, 100%";
const TERTIARY_COLOR_RGB = "159, 93.2%";

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
        primary0: `hsl(${PRIMARY_COLOR_RGB}, 99% )`,
        primary10: `hsl(${PRIMARY_COLOR_RGB}, 90%)`,
        primary20: `hsl(${PRIMARY_COLOR_RGB}, 80%)`,
        primary30: `hsl(${PRIMARY_COLOR_RGB}, 70%)`,
        primary40: `hsl(${PRIMARY_COLOR_RGB}, 60%)`,
        primary50: `hsl(${PRIMARY_COLOR_RGB}, 50%)`,
        primary60: `hsl(${PRIMARY_COLOR_RGB},40%)`,
        primary70: `hsl(${PRIMARY_COLOR_RGB}, $30%)`,
        primary80: `hsl(${PRIMARY_COLOR_RGB}, 20%)`,
        primary90: `hsl(${PRIMARY_COLOR_RGB}, 10%)`,
        primary100: `hsl(${PRIMARY_COLOR_RGB}, 0%)`,
        secondary0: `hsl(${SECONDARY_COLOR_RGB}, 99%)`,
        secondary10: `hsl(${SECONDARY_COLOR_RGB}, 90%)`,
        secondary20: `hsl(${SECONDARY_COLOR_RGB}, 80%)`,
        secondary30: `hsl(${SECONDARY_COLOR_RGB}, 70%)`,
        secondary40: `hsl(${SECONDARY_COLOR_RGB}, 60%)`,
        secondary50: `hsl(${SECONDARY_COLOR_RGB}, 50%)`,
        secondary60: `hsl(${SECONDARY_COLOR_RGB}, 40%)`,
        secondary70: `hsl(${SECONDARY_COLOR_RGB}, 30%)`,
        secondary80: `hsl(${SECONDARY_COLOR_RGB}, 20%)`,
        secondary90: `hsl(${SECONDARY_COLOR_RGB}, 10%)`,
        secondary100: `hsl(${SECONDARY_COLOR_RGB}, 0%)`,
        tertiary0: `hsl(${TERTIARY_COLOR_RGB}, 99%)`,
        tertiary10: `hsl(${TERTIARY_COLOR_RGB}, 90%)`,
        tertiary20: `hsl(${TERTIARY_COLOR_RGB}, 80%)`,
        tertiary30: `hsl(${TERTIARY_COLOR_RGB}, 70%)`,
        tertiary40: `hsl(${TERTIARY_COLOR_RGB}, 60%)`,
        tertiary50: `hsl(${TERTIARY_COLOR_RGB}, 50%)`,
        tertiary60: `hsl(${TERTIARY_COLOR_RGB}, 40%)`,
        tertiary70: `hsl(${TERTIARY_COLOR_RGB}, 30%)`,
        tertiary80: `hsl(${TERTIARY_COLOR_RGB}, 20%)`,
        tertiary90: `hsl(${TERTIARY_COLOR_RGB}, 10%)`,
        tertiary100: `hsl(${TERTIARY_COLOR_RGB}, 0%)`,
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
      spacing: {
        extraLarge: HEADING_EXTRA_LARGE_SIZE,
        large: HEADING_LARGE_SIZE,
        subLarge: HEADING_SIZE,
        medium: SUBHEADING_SIZE,
        subMedium: parseFloat(SUBHEADING_SIZE) - 0.4 + "rem",
        small: parseFloat(SUBHEADING_SIZE) - 0.8 + "rem",
        extraSmall: parseFloat(SUBHEADING_SIZE) - 1.2 + "rem",
      },
    },
  },
  plugins: [],
};
