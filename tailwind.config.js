module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        green: {
          lightest: "#EAFFEA",
          light: "#B5F1BF",
          DEFAULT: "#7FB88B",
          dark: "#4B8359",
          darkest: "#18512C",
        },
        brown: {
          DEFAULT: "#87521B",
        },
        lightBg: "#FFEEE0",
        accentLight: "#FFDCC1",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    // Default project breakpoints
    // https://tailwindcss.com/docs/screens
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
