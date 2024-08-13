/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.5rem",
      "2xl": "2.5rem",
    },
    colors: {
      white: "#ffffff",
      rose: {
        50: "#FCF8F6",
        100: "#F5EEEC",
        400: "#AD8A85",
        500: "#87635A",
        900: "#260F08",
      },
      red: {
        700: "#C73B0F",
        900: "#702108",
      },
    },
  },
  plugins: [],
};
