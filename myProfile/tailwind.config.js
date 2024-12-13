/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["public/index.html", "src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "Noto Sans KR", "Arial", "sans-serif"], // 기본 Sans-serif
        body: ["Noto Sans KR", "Pretendard", "sans-serif"], // 본문용
        ui: ["Pretendard", "sans-serif"], // UI용
      },
    },
  },
  plugins: [],
};
