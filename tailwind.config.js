const HEADING_EXTRA_LARGE_SIZE = "12.8rem";
const HEADING_LARGE_SIZE = "6.4rem";
const HEADING_SUBLARGE_SIZE = "4.8rem";
const HEADING_SIZE = "3.2rem";
const SUBHEADING_SIZE = "2.4rem";
const BODY_SIZE = "1.8rem";

const PRIMARY_COLOR_HSL = "218.54, 69%";
const PRIMARY_COLOR_SHADOW = "218.54deg 69% 85%";

const SECONDARY_COLOR_HSL = "44, 100%";
const SECONDARY_COLOR_SHADOW = "44deg 100% 85% ";

const TERTIARY_COLOR_HSL = "159, 93.2%";

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "mobile-medium": "370px",
      "mobile-small": "320px",
      "mobile-large": "425px",
      tablet: "768px",
      "laptop-large": "1440px",
      laptop: "1024px",
    },
    extend: {
      colors: {
        primary0: `hsl(${PRIMARY_COLOR_HSL}, 99% )`,
        primary5: `hsl(${PRIMARY_COLOR_HSL}, 95%)`,
        primary10: `hsl(${PRIMARY_COLOR_HSL}, 90%)`,
        primary20: `hsl(${PRIMARY_COLOR_HSL}, 80%)`,
        primary30: `hsl(${PRIMARY_COLOR_HSL}, 70%)`,
        primary40: `hsl(${PRIMARY_COLOR_HSL}, 60%)`,
        primary50: `hsl(${PRIMARY_COLOR_HSL}, 50%)`,
        primary60: `hsl(${PRIMARY_COLOR_HSL},40%)`,
        primary70: `hsl(${PRIMARY_COLOR_HSL}, $30%)`,
        primary80: `hsl(${PRIMARY_COLOR_HSL}, 20%)`,
        primary90: `hsl(${PRIMARY_COLOR_HSL}, 10%)`,
        primary100: `hsl(${PRIMARY_COLOR_HSL}, 0%)`,
        secondary0: `hsl(${SECONDARY_COLOR_HSL}, 99%)`,
        secondary5: `hsl(${SECONDARY_COLOR_HSL}, 95%)`,
        secondary10: `hsl(${SECONDARY_COLOR_HSL}, 90%)`,
        secondary20: `hsl(${SECONDARY_COLOR_HSL}, 80%)`,
        secondary30: `hsl(${SECONDARY_COLOR_HSL}, 70%)`,
        secondary40: `hsl(${SECONDARY_COLOR_HSL}, 60%)`,
        secondary50: `hsl(${SECONDARY_COLOR_HSL}, 50%)`,
        secondary60: `hsl(${SECONDARY_COLOR_HSL}, 40%)`,
        secondary70: `hsl(${SECONDARY_COLOR_HSL}, 30%)`,
        secondary80: `hsl(${SECONDARY_COLOR_HSL}, 20%)`,
        secondary90: `hsl(${SECONDARY_COLOR_HSL}, 10%)`,
        secondary100: `hsl(${SECONDARY_COLOR_HSL}, 0%)`,
        tertiary0: `hsl(${TERTIARY_COLOR_HSL}, 99%)`,
        tertiary5: `hsl(${TERTIARY_COLOR_HSL}, 95%)`,
        tertiary10: `hsl(${TERTIARY_COLOR_HSL}, 90%)`,
        tertiary20: `hsl(${TERTIARY_COLOR_HSL}, 80%)`,
        tertiary30: `hsl(${TERTIARY_COLOR_HSL}, 70%)`,
        tertiary40: `hsl(${TERTIARY_COLOR_HSL}, 60%)`,
        tertiary50: `hsl(${TERTIARY_COLOR_HSL}, 50%)`,
        tertiary60: `hsl(${TERTIARY_COLOR_HSL}, 40%)`,
        tertiary70: `hsl(${TERTIARY_COLOR_HSL}, 30%)`,
        tertiary80: `hsl(${TERTIARY_COLOR_HSL}, 20%)`,
        tertiary90: `hsl(${TERTIARY_COLOR_HSL}, 10%)`,
        tertiary100: `hsl(${TERTIARY_COLOR_HSL}, 0%)`,
      },
      fontSize: {
        "heading-extra-large": HEADING_EXTRA_LARGE_SIZE,
        "heading-large": HEADING_LARGE_SIZE,
        "heading-sub-large": HEADING_SUBLARGE_SIZE,
        heading: HEADING_SIZE,
        "sub-heading": SUBHEADING_SIZE,
        body: BODY_SIZE,
      },
      lineHeight: {
        "heading-extra-large": HEADING_EXTRA_LARGE_SIZE,
        "heading-large": HEADING_LARGE_SIZE,
        "heading-sub-large": HEADING_SUBLARGE_SIZE,
        heading: HEADING_SIZE,
        "sub-heading": SUBHEADING_SIZE,
        body: BODY_SIZE,
      },
      spacing: {
        "extra-large": HEADING_EXTRA_LARGE_SIZE,
        large: HEADING_LARGE_SIZE,
        "sub-large": HEADING_SIZE,
        medium: SUBHEADING_SIZE,
        "sub-medium": parseFloat(SUBHEADING_SIZE) - 0.4 + "rem",
        small: parseFloat(SUBHEADING_SIZE) - 0.8 + "rem",
        "extra-small": parseFloat(SUBHEADING_SIZE) - 1.6 + "rem",
      },
      borderRadius: {
        "extra-large": HEADING_EXTRA_LARGE_SIZE,
        large: HEADING_LARGE_SIZE,
        "sub-large": HEADING_SIZE,
        medium: SUBHEADING_SIZE,
        "sub-medium": parseFloat(SUBHEADING_SIZE) - 0.4 + "rem",
        small: parseFloat(SUBHEADING_SIZE) - 0.8 + "rem",
        "extra-small": parseFloat(SUBHEADING_SIZE) - 1.6 + "rem",
      },
      boxShadow: {
        "primary-low": `0.2px 0.3px 0.4px hsl(${PRIMARY_COLOR_SHADOW} / 0.16),
    0.4px 0.5px 0.8px -0.9px hsl(${PRIMARY_COLOR_SHADOW} / 0.2),
    0.8px 1.1px 1.7px -1.9px hsl(${PRIMARY_COLOR_SHADOW} / 0.23);`,
        "primary-medium": `0.2px 0.3px 0.4px hsl(${PRIMARY_COLOR_SHADOW} / 0.14),
    0.6px 0.9px 1.3px -0.5px hsl(${PRIMARY_COLOR_SHADOW} / 0.15),
    1.1px 1.6px 2.4px -0.9px hsl(${PRIMARY_COLOR_SHADOW} / 0.17),
    2.1px 2.9px 4.4px -1.4px hsl(${PRIMARY_COLOR_SHADOW} / 0.19),
    3.9px 5.4px 8.1px -1.9px hsl(${PRIMARY_COLOR_SHADOW} / 0.2);`,
        "primary-high": `
    0.2px 0.3px 0.4px hsl(${PRIMARY_COLOR_SHADOW} / 0.14),
    1px 1.4px 2.1px -0.2px hsl(${PRIMARY_COLOR_SHADOW} / 0.15),
    1.7px 2.5px 3.7px -0.5px hsl(${PRIMARY_COLOR_SHADOW} / 0.16),
    2.6px 3.7px 5.5px -0.7px hsl(${PRIMARY_COLOR_SHADOW} / 0.17),
    3.8px 5.3px 7.9px -0.9px hsl(${PRIMARY_COLOR_SHADOW} / 0.18),
    5.4px 7.6px 11.3px -1.2px hsl(${PRIMARY_COLOR_SHADOW} / 0.19),
    7.7px 10.8px 16.1px -1.4px hsl(${PRIMARY_COLOR_SHADOW} / 0.2),
    10.8px 15.2px 22.7px -1.7px hsl(${PRIMARY_COLOR_SHADOW} / 0.21),
    14.9px 21px 31.3px -1.9px hsl(${PRIMARY_COLOR_SHADOW} / 0.22);`,
        "secondary-low": `0.2px 0.3px 0.4px hsl(${SECONDARY_COLOR_SHADOW} / 0.16),
    0.4px 0.5px 0.8px -0.9px hsl(${SECONDARY_COLOR_SHADOW} / 0.2),
    0.8px 1.1px 1.7px -1.9px hsl(${SECONDARY_COLOR_SHADOW} / 0.23);`,
        "secondary-medium": `0.2px 0.3px 0.4px hsl(${SECONDARY_COLOR_SHADOW} / 0.14),
    0.6px 0.9px 1.3px -0.5px hsl(${SECONDARY_COLOR_SHADOW} / 0.15),
    1.1px 1.6px 2.4px -0.9px hsl(${SECONDARY_COLOR_SHADOW} / 0.17),
    2.1px 2.9px 4.4px -1.4px hsl(${SECONDARY_COLOR_SHADOW} / 0.19),
    3.9px 5.4px 8.1px -1.9px hsl(${SECONDARY_COLOR_SHADOW} / 0.2);`,
        "secondary-high": `
    0.2px 0.3px 0.4px hsl(${SECONDARY_COLOR_SHADOW} / 0.14),
    1px 1.4px 2.1px -0.2px hsl(${SECONDARY_COLOR_SHADOW} / 0.15),
    1.7px 2.5px 3.7px -0.5px hsl(${SECONDARY_COLOR_SHADOW} / 0.16),
    2.6px 3.7px 5.5px -0.7px hsl(${SECONDARY_COLOR_SHADOW} / 0.17),
    3.8px 5.3px 7.9px -0.9px hsl(${SECONDARY_COLOR_SHADOW} / 0.18),
    5.4px 7.6px 11.3px -1.2px hsl(${SECONDARY_COLOR_SHADOW} / 0.19),
    7.7px 10.8px 16.1px -1.4px hsl(${SECONDARY_COLOR_SHADOW} / 0.2),
    10.8px 15.2px 22.7px -1.7px hsl(${SECONDARY_COLOR_SHADOW} / 0.21),
    14.9px 21px 31.3px -1.9px hsl(${SECONDARY_COLOR_SHADOW} / 0.22);`,
      },
    },
  },
  plugins: [],
};
