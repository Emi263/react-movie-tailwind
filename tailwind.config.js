module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fill, minmax(200px, 1fr))",
      },
      fontFamily: {
        goo: " 'Patrick Hand', cursive",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
