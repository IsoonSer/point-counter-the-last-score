/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // "**/*.{js,ts,jsx,tsx}"
    "src/**/*.tsx",
    "components/**/*.tsx",
    "components/*.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

