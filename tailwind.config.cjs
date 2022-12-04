/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Paytone One", "sans-serif"],
        body: ["sofia-pro"],
        vt323: ["VT323", "monospace"],
      },
      colors: {
        vhsPale: "#f7efe1",
        vhsDark: "#08101e",
        vhsYellow: "#ffcc31",
        vhsOrange: "#fe5d1e",
        vhsRed: "#f91b25",
        vhsMaroon: "#bf1d42",
        vhsBurgundy: "#661f3f",
        vhsPurple1: "#ae32a7",
        vhsPurple2: "#8131b1",
        vhsDarkPurple: "#4a32b0",
        vhsDarkBlue: "#3255af",
        vhsBlue: "#3182af",
      },
    },
  },
  plugins: [],
};
