/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      colors: {
        blue: {
          600: "#006FF9",
        },
      },
    },
  },
  plugins: [require("tailwindcss-question-mark")],
};

