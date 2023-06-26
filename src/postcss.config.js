const tailwind = require("tailwindcss");

module.exports = {
  plugins: [tailwind("../tailwind.config.js"), require("autoprefixer")],
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};
