import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "shadow-one":
          " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        "shadow-catmain":
          "inset 5px 11px 20px 0px rgba(0,0,0,0.5), -1px 1px 13px rgb(255 171 220 / 40%)",
        "shadow-white": "inset 0px 1px 6px 0px rgb(71 71 71 / 97%)",
      },
    },
    dropShadow: {
      category: "3px 4px 3px #a1a1a1",
    },
    backgroundImage: {
      patern1:
        "background:url('https://uploade.storage.iran.liara.space/pattern.png') repeat",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
