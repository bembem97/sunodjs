module.exports = {
  content: [
    "./pages/**/*.{js,ts,md,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-node-out": "fadeNode 2s linear forwards",
        "fade-border-out": "fadeBorder 2s linear forwards",
      },

      keyframes: {
        fadeNode: {
          from: { opacity: 1, transform: "translateY(0)" },
          to: { opacity: 0, transform: "translateY(-20px)" },
        },
        fadeBorder: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
