/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      Light_red: "hsl(0, 100%, 67%)",
      Orangey_yellow: "hsl(39, 100%, 56%)",
      Green_teal: "hsl(166, 100%, 37%)",
      Cobalt_blue: "hsl(234, 85%, 45%)",

      /* Gradients */
      Light_slate_blue: "hsl(252, 100%, 67%)",
      Light_royal_blue: "hsl(241, 81%, 54%)",
      Violet_blue: "hsla(256, 72%, 46%, 1)",
      Persian_blue: "hsla(241, 72%, 46%, 0)",

      /* Neutral */

      White: "hsl(0, 0%, 100%)",
      Pale_blue: "hsl(221, 100%, 96%)",
      Light_lavender: "hsl(241, 100%, 89%)",
      Dark_gray_blue: "hsl(224, 30%, 27%)",
    },
    fontFamily: {
      sans: ["Hanken Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
