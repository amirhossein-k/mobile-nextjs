import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mo: "455px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      x: "1180px",
      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      boxShadow: {
        "shadow-one":
          " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        "shadow-catmain":
          "inset 5px 11px 20px 0px rgba(0,0,0,0.5), -1px 1px 13px rgb(255 171 220 / 40%)",
        "shadow-white": "inset 0px 1px 6px 0px rgb(71 71 71 / 97%)",
        card2:
          "inset 5px 11px 20px 0px rgb(218 231 235 / 39%), -1px 1px 13px rgb(196 231 239 / 40%)",
      },
    },
    dropShadow: {
      category: "3px 4px 3px #a1a1a1",
    },
    boxShadow: {
      card: "0 0 30px #00000048",
    },

    backgroundImage: {
      patern1:
        "background:url('https://uploade.storage.iran.liara.space/pattern.png') repeat",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
}) as Config;
export default config;
