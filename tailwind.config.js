/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",         // این خط برای فایل‌های JS کنار HTML
    "./src/**/*.js",  // اگه فایل JS داخل پوشه src هستن
  ],
  darkMode: 'class',  // فعال کردن حالت تاریک با کلاس
  theme: {
    extend: {
      fontFamily: {
        iransans: ['IRANSans', 'sans-serif'],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out forwards",
      },
    },
    screens: {
      mobile: "360px",
      desktop: "1000px",
    },
  },
  plugins: [],
};