/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      scale: {
        400: "4",
        600: "6",
        800: "8",
      },
    },
  },
  plugins: [require("daisyui")],
};
