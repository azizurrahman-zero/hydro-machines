/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0E1F51",
          secondary: "#ED1B24",
          accent: "#F7F7F7",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
