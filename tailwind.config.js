module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["'DM Sans'", "sans-serif"],
        GT: ["'GT Walsheim Pro'"],
      },
      colors: {
        primary: {
          red: "#FF503F",
          gray: {
            dark: "#6B7077",
            mid: "#6B6B6B",
            light: "#9FA2B4",
            border: "#DEDFE8",
          },
          pink: "#FCF1E8",
        },
        pie: {
          green: "#63CD81",
          red: "#EE0B0B",
          lilac: "#7963CD",
          brown: "#FF8F78",
          purple: "#9F00AD",
          blue: "#5BC7E6",
          gray: "#51546F",
          dark: {
            green: "#017622",
            red: "#EE0B0B",
            lilac: "#492AC4",
            brown: "#97240C",
            purple: "#3B0040",
            blue: "#065F78",
            gray: "#131526",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
