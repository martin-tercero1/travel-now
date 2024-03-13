/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        sanFrancisco: "url(/img/sanFrancisco.jpg)",
        bali: "url(/img/bali.jpg)",
        chicago: "url(/img/chicago.jpg)",
        europe: "url(/img/europe.jpg)",
        iceland: "url(/img/iceland.jpg)",
        LA: "url(/img/LA.jpg)",
        miami: "url(/img/miami.jpg)",
        new_york: "url(/img/new_york.jpg)",
        norway: "url(/img/norway.jpg)",
        sanFranciscoDesktop: "url(/img/sanFranciscoDesktop.jpg)",
        seattle: "url(/img/seattle.jpg)",
        switzerland: "url(/img/switzerland.jpg)",
        sydney: "url(/img/sydney.jpg)",
        yosemite: "url(/img/yosemite.jpg)",
      },
    },
    colors: {
      primary: "#CC2D4A",
      secondary: "#8FA206",
      white: "#FFFFFF",
      black: "#000000",
      accent: "#61AEC9",
      "gray-900": "#111827",
      "gray-800": "#1F2937",
      "gray-700": "#374151",
      "gray-50": "#E5E5E5",
    },
  },
  plugins: [],
};
