module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2489FB",
          600: "#2563EB",
          700: "#0057CD",
          800: "#1E40AF",
          900: "#1D254A",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F2F2F2",
          200: "#E7E7E7",
          300: "#D3D3D3",
          400: "#AAAAAA",
          500: "#7C7C7C",
          600: "#606060",
          700: "#494949",
          800: "#353535",
          850: "#222222",
          900: "#111111",
        },
      },
    },
  },
};
