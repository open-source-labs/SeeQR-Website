/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        marine: "#57BC90",
        forest: "#015249",
        sleekgray: "#A5A5AF",
        feather: "77C9D4",
        electric: "#3CC47C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        apple: 'url("../assets/mac.png")',
        windows: 'url("../assets/windows.png")',
        linux: 'url("../assets/linux.png")',
      },
    },
  },
  plugins: [],
};
