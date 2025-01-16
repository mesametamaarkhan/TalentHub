module.exports = {
  plugins: [
    require('@tailwindcss/jit'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.{html,js,jsx}'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }),
  ],
};

