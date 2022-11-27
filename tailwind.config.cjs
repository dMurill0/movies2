/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,png,webp}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif']
      },
      // backgroundImage: {
      //   'eng': "url('https://toppng.com/free-image/united-kingdom-large-flag-PNG-free-PNG-Images_60594')",
      //   'spa': "url('https://toppng.com/free-image/spain-large-flag-PNG-free-PNG-Images_60644')",
      //   'pt': "url('/images/gr.jpg')",
      //   'cn': "url('/img/footer-texture.png')",
      //   'gre': "url('/img/hero-pattern.svg')",
      //   'ita': "url('/img/footer-texture.png')",
      // }
    },
  },
  plugins: [],
}
