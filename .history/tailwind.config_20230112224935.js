// tailwind.config.js
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    zIndex: {
      999: 999,
    },
    screens: {
      xs: "500px",
      md: "768px",
    },
  },
  variants: {},
  plugins: [],
};
