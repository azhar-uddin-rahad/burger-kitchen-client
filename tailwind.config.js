/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-red': '#FF0000',
      },

    },
  },
  plugins: [require("daisyui")],
}
