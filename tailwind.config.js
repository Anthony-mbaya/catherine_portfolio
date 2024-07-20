/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'prof-bg':'url("src/components/images/ton2.jpg")',
        'nav-bg':'url("src/components/images/bg-nav.jpg")',
        'footer-bg':'url("src/components/images/footer-bg.jpg")',
      }, 
    },
  },
  plugins: [],
}

