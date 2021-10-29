module.exports = {
  purge: ["*.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#333",
        secondary: "#555",
        note: "rgb(218, 10, 10)",
      },
      backgroundColor: {
        popup: "rgba(0, 0, 0, 0.6)",
        code: "rgb(44, 44, 44)",
      },
      listStyleType: {
        square: "square",
        "lower-alpha": "lower-alpha",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
