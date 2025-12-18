/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#000000",
        primary: "#3730A3",
        primary_shade: "#3730a32e",
        secondary: "#050814",
        info: "#0EA5E9",
        success: "#22C55E",
        danger: "#EF4444",
        warning: "#F59E0B",

        "default-dark": "#F8FAFC",
        "secondary-dark": "#94A3B8", 
      },
      boxShadow: {
        "glow-primary": "0 16px 45px #2563ebbf",
      },
    },
  },
  plugins: [],
};
