/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1280px" },
      md: { max: "992px" },
      sm: { max: "768px" },
      xs: { max: "480px" },
    },
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",

        "border-primary": "var(--border-primary)",
        "hover-primary": "var(--hover-primary)",

        "text-heading": "var(--text-heading)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        "disabled-primary": "var(--disabled-primary)",
        "disabled-secondary": "var(--disabled-secondary)",
      },
      fontFamily: {
        body: "var(--font-raleway)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        "fade-in": "fade-in 150ms ease-in-out forwards",
        "fade-out": "fade-out 150ms ease-in-out forwards",
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
