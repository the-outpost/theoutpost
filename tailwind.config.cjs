/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        HighAlpine: ['HighAlpine', 'Baskerville', 'serif'],
        BellMT: ['BellMT', 'Baskerville', 'serif'],
        Inconsolata: ['Inconsolata', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
