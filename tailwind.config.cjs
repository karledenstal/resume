/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Paytone One", "sans-serif"],
        body: ["sofia-pro"],
      },
      colors: {
        pale: "#f7efe1",
        vhsYellow: "#ffcc31",
        vhsOrange: "#fe5d1e",
        vhsRed: "#f91b25",
        vhsMaroon: "#bf1d42",
        vhsBurgundy: "#661f3f",
      },
    },
  },
  plugins: [],
};
