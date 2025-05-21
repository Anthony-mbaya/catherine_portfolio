/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'prof-bg':'url("/images/cate_image.jpeg")',
        'nav-bg':'url("/images/bg-nav.jpg")',
        'footer-bg':'url("/images/footer-bg.jpg")',
      },
    },
  },
  plugins: [],
}

