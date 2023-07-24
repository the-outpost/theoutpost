/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        HighAlpine: ['HighAlpine', 'Baskerville', 'serif'],
        BellMT: ['BellMT', 'Baskerville', 'serif'],
        Inconsolata: ['Inconsolata', 'sans-serif']
      },
      colors: {
        sage: '#98b3a1',
        'sage-darker': '#6c8073',
        'sage-darkest': '#404d45'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
