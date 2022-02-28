module.exports = {
  // 这一部分配置是用到了purgecss
  // 后续会说，主要是用于样式的tree shaking
  purge: {
    mode: 'all',
    enable: true,
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/app.{js,jsx,ts,tsx}"],
  },
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
