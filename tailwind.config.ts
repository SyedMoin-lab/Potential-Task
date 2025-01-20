/** @type {import('tailwindcss').Config} */
const config: import('tailwindcss').Config = {
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

module.exports = config; // Export the config