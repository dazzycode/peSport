

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#FFFFFF",
        primary2: "#18181b",
        primary3: "#111111",
        gradientFrom: "#ff4b2b", 
        gradientTo: "#8f00ff",

        sec1: "#1A1A1A",
        sec2: "#242424",
      },
      fontFamily: {
                joystix: ['Joystix', 'monospace'],
        pry: ["Segoe UI", "sans-serif"],
      },
      fontSize: {
        pS: "16px",
        pL: "20px",
        pXL: "28px",
        pXXL: "4.4rem",
        pXXXL: "5.2rem",
      },
    },
  },
  plugins: [],
};
