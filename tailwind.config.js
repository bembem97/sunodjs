const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,md,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.gray[50],
        secondary: colors.indigo[100],
        tertiary: colors.purple[400],
      },

      animation: {
        "rotate-90": "rotate-90 150ms ease-in-out forwards",
        "rotate-0": "rotate-0 150ms ease-in-out forwards",

        "slide-to-right": "to-right 300ms ease-out forwards",
        "slide-to-left": "to-left 300ms linear forwards",

        "get-darker": "get-darker 200ms ease-in forwards",
      },

      keyframes: {
        "rotate-90": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(90deg)" },
        },
        "rotate-0": {
          from: { transform: "rotate(90deg)" },
          to: { transform: "rotate(0deg)" },
        },

        "to-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },

        "to-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },

        "get-darker": {
          from: { backgroundColor: "rgba(15, 15, 15, 0)" },
          to: { backgroundColor: "rgba(15, 15, 15, 0.4)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
