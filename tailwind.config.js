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
        "rotate-90": "rotate-90 100ms ease-in-out forwards",
        "rotate-0": "rotate-0 100ms ease-in-out forwards",
        "collapse-show": "collapse-show 100ms ease-in-out forwards",
        "collapse-hide": "collapse-hide 100ms ease-in-out forwards",
        "slide-to-right": "to-right 1000ms ease-in-out forwards",
        "slide-to-left": "to-left 1000ms ease-in-out forwards",
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

        "collapse-show": {
          from: { height: "0" },
          to: { height: "100%" },
        },

        "collapse-hide": {
          from: { height: "100%" },
          to: { height: "0" },
        },

        "to-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },

        "to-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
