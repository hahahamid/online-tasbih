export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        // Adjust the color and size as you like
        glow: ["0 0 10px rgba(34, 225, 94, 1)", "0 0 40px rgba(255, 255, 255, 0.2)"],
      },
      animation: {
        glow: "glow 0.5s ease-out 1",
      },
      // Adjust the color and size of the shadow as you like
      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0px 0px 15px 10px rgba(255, 255, 255, 0.5)",
          },
          "100%": {
            boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0)",
          },
        },
      },
    },
  },
  plugins: [],
}
