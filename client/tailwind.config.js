/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Didact Gothic", "Tahoma", "Verdana", "sans-serif"],
    },
    extend: {
      textColor: {
        default: "rgb(33, 37, 41)",
      },
      colors: {
        primary: "#1565c0",
        "primary-dark": "#0d47a1",
        alternate: "#eeeeee",
        dark: "#212529",
      },
      fontFamily: {
        cubano: ["cubano", "sans-serif"],
        gothic: ["didact gothic", "sans-serif"],
        copse: ["copse", "sans-serif"],
      },
    },
  },
  plugins: [],
};
