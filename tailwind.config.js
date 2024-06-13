/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Urbanist", "sans-serif"],
      },
      colors: {
        primary: "#161616",
        secondary: "#606470",
        tertiary: "#fff",
        quaternary: "#015AAA",

        "bg-secondary": "#E8E8E8",
      },
    },
  },
  plugins: [],
};
