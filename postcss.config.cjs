javascript
// postcss.config.cjs
module.exports = {
  plugins: [
    require('tailwindcss')({
      content: ['./app/**/*.{js,ts,jsx,tsx}'], // Content paths where Tailwind searches for classes
      mode: 'jit', // JIT mode for faster bundling
      theme: {}, // Your tailwind.config.ts should handle theme customization
      variants: {}, // Tailwind variants handling
      plugins: [], // Any additional Tailwind plugins
    }),
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', '> 1%'], // Target modern browsers
      addBrowserslist: false,
      devNodes: true, // Re-add prefixes in dev mode
    }),
  ],
};