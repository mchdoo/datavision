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
        xl: "0 5px 20px -10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
