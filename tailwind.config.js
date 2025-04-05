/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        gothic: ["didact gothic", "sans-serif"],
        copse: ["copse", "sans-serif"],
        "roboto-mono": ["roboto mono", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1565c0",
          "primary-focus": "#0d47a1",
          "primary-content": "#ffffff",
          accent: "#c0ac15",
          "accent-content": "#ffffff",
        },
      },
    ],
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
