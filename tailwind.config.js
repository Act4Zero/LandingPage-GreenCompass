module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        ink: "#12251B",
        forest: "#164B35",
        leaf: "#2F7D4A",
        moss: "#B8D86B",
        paper: "#F7F7F0",
        stone: "#E7E6DC",
        green: {
          lightest: "#EEF5E8",
          light: "#CBE2BF",
          DEFAULT: "#2F7D4A",
          dark: "#164B35",
          darkest: "#12251B",
        },
        brown: {
          DEFAULT: "#87521B",
        },
        lightBg: "#F7F7F0",
        accentLight: "#DDE8B6",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(18, 37, 27, 0.10)",
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
