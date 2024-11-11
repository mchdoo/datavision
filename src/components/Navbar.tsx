import { locale } from "../pages/index.astro";

export default function Navbar() {
  return (
    <nav class="transition-shadow hover:shadow-xl bg-white fixed top-[calc(--nav-height/2)] rounded left-1/2 -translate-x-1/2 p-4 py-2 inline-flex items-center gap-2">
      DataVision (/{locale.value})
      <button
        onClick={() => {
          locale.value = locale.value === "en" ? "es" : "en";
        }}
      >
        Select Locale
      </button>
    </nav>
  );
}
