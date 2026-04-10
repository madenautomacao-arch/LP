export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline": "#777575",
        "on-secondary": "#280067",
        "surface-container": "#1a1919",
        "on-error-container": "#ffa8a3",
        "secondary-fixed": "#dac9ff",
        "primary-dim": "#156aff",
        "tertiary-container": "#f797f0",
        "on-secondary-fixed-variant": "#5f28c8",
        "outline-variant": "#494847",
        "error-container": "#9f0519",
        "background": "#0e0e0e",
        "surface-bright": "#2c2c2c",
        "surface": "#0e0e0e",
        "surface-container-lowest": "#000000",
        "on-primary-fixed": "#000000",
        "secondary-dim": "#8455ef",
        "inverse-on-surface": "#565554",
        "tertiary-fixed": "#f797f0",
        "on-primary-container": "#001e58",
        "error-dim": "#d7383b",
        "secondary": "#ac8aff",
        "error": "#ff716c",
        "primary-container": "#799dff",
        "surface-dim": "#0e0e0e",
        "on-surface-variant": "#adaaaa",
        "primary": "#8eabff",
        "secondary-fixed-dim": "#ceb9ff",
        "on-tertiary-fixed-variant": "#6c1a6c",
        "on-secondary-fixed": "#40009b",
        "primary-fixed": "#799dff",
        "tertiary-dim": "#e88ae1",
        "surface-container-highest": "#262626",
        "on-secondary-container": "#d9c8ff",
        "primary-fixed-dim": "#638eff",
        "on-primary": "#002971",
        "surface-container-low": "#131313",
        "on-tertiary-fixed": "#400042",
        "on-tertiary-container": "#610e63",
        "on-primary-fixed-variant": "#00276c",
        "on-error": "#490006",
        "inverse-primary": "#0055d7",
        "surface-container-high": "#201f1f",
        "on-background": "#ffffff",
        "inverse-surface": "#fcf8f8",
        "surface-variant": "#262626",
        "secondary-container": "#5516be",
        "on-tertiary": "#6d1b6d",
        "surface-tint": "#8eabff",
        "tertiary": "#ffaaf7",
        "tertiary-fixed-dim": "#e88ae1",
        "on-surface": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        }
      }
    },
  },
  plugins: [],
}

