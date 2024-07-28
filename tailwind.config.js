/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-black-dark' :'#191920',
        'regal-black': '#27292D',
        'greyish':'#6B6C70',
        'greyish-100':'#C5C7CA',
        'bluish':'#4A96FF',
        'placeholder-color':'#7F8084',
        'input-br-color':'#35373B'
      }
    },
  },
  plugins: [],
}
