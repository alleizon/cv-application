/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        body: "40% 60%",
      },
      gridTemplateRows: {
        body: "20% 80%",
      },
    },
  },
  plugins: [],
};
