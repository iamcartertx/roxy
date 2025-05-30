// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#1A1A1A",
        grayLight: "#F5F5F5",
        grayMedium: "#E0E0E0",
        action: "#EC5C39",
        accent: "#000000",
      },
      fontFamily: {
        sans: ['Poppins', 'Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};