const HEADING_EXTRA_LARGE_SIZE = "12.8rem";
const HEADING_LARGE_SIZE = "6.4rem";
const HEADING_SUBLARGE_SIZE = "4.8rem";
const HEADING_SIZE = "3.2rem";
const SUBHEADING_SIZE = "2.4rem";
const BODY_SIZE = "1.8rem";

const LIGHTNESS_FACTOR = "50%";
const SATURATION_FACTOR = 16;

const PRIMARY_COLOR_HSL = "218.54, 69%";
const PRIMARY_COLOR_SHADOW = `218.54deg ${
  69 - SATURATION_FACTOR
}% ${LIGHTNESS_FACTOR}`;

const SECONDARY_COLOR_HSL = "44, 100%";
const SECONDARY_COLOR_SHADOW = `44deg ${
  100 - SATURATION_FACTOR
}% ${LIGHTNESS_FACTOR} `;

const TERTIARY_COLOR_HSL = "159, 93.2%";
const TERTIARY_COLOR_SHADOW = `159deg ${
  93.2 - SATURATION_FACTOR
}% ${LIGHTNESS_FACTOR} `;

const BLACK_COLOR_SHADOW = `0deg 0% ${LIGHTNESS_FACTOR}`;

function lowShadow(color) {
  return `0.8px 0.6px 1px hsl(${color} / 0.44),
  1.3px 0.9px 1.5px -1.8px hsl(${color} / 0.36),
  3.2px 2.4px 3.9px -3.5px hsl(${color} / 0.27)`;
}

function mediumShadow(color) {
  return `0.8px 0.6px 1px hsl(${color} / 0.37),
  1.7px 1.3px 2.1px -0.9px hsl(${color} / 0.33),
  3.5px 2.6px 4.2px -1.8px hsl(${color} / 0.28),
  7.8px 5.8px 9.4px -2.7px hsl(${color} / 0.24),
  15.9px 11.8px 19.2px -3.5px hsl(${color} / 0.2)`;
}

function highShadow(color) {
  return `0.8px 0.6px 1px hsl(${color} / 0.35),
  2.5px 1.9px 3px -0.4px hsl(${color} / 0.32),
  4.5px 3.3px 5.4px -0.8px hsl(${color} / 0.3),
  7.2px 5.4px 8.7px -1.2px hsl(${color} / 0.28),
  11.4px 8.5px 13.8px -1.6px hsl(${color} / 0.26),
  17.7px 13.2px 21.4px -2px hsl(${color} / 0.24),
  26.6px 19.8px 32.1px -2.4px hsl(${color} / 0.22),
  38.9px 29px 46.9px -2.8px hsl(${color} / 0.2),
  55px 41px 66.4px -3.2px hsl(${color} / 0.18),
  75.7px 56.4px 91.3px -3.5px hsl(${color} / 0.16)`;
}

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
        // ...
        "primary-low": lowShadow(PRIMARY_COLOR_SHADOW),
        "primary-medium": mediumShadow(PRIMARY_COLOR_SHADOW),
        "primary-high": highShadow(PRIMARY_COLOR_SHADOW),
        "secondary-low": lowShadow(SECONDARY_COLOR_SHADOW),
        "secondary-medium": mediumShadow(SECONDARY_COLOR_SHADOW),
        "secondary-high": highShadow(SECONDARY_COLOR_SHADOW),
        "tertiary-low": lowShadow(TERTIARY_COLOR_SHADOW),
        "tertiary-medium": mediumShadow(TERTIARY_COLOR_SHADOW),
        "tertiary-high": highShadow(TERTIARY_COLOR_SHADOW),
        low: lowShadow(BLACK_COLOR_SHADOW),
        medium: mediumShadow(BLACK_COLOR_SHADOW),
        high: highShadow(BLACK_COLOR_SHADOW),
      },
    },
  },
  plugins: [],
};
