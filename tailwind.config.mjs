/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        bg: "rgb(var(--bg))",
        fg: { DEFAULT: "rgb(var(--fg))", muted: "rgba(var(--fg-muted))" },
      },
      borderRadius: {
        2: "1rem",
        DEFAULT: "0.7rem",
      },
      boxShadow: {
        xl: "0 5px 20px -10px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("@tailwindcss/typography")],
};
