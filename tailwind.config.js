// tailwind.config.js
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    zIndex: {
      999: 999,
    },
    screens: {
      md: { max: "1024px" },
      lg: { min: "1024px" },
      xl: { max: "1200px" },
    },
    maxWidth: {
      full: "100%",
      "screen-xl": "1200px",
    },
    flex: {
      1: "1 1 0%",
      basis: "100%",
      "basis-1/2": "50%",
    },
  },
  variants: {},
  plugins: [],
};
