/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#229891',
        'secondary':'#458745'
      }
    },
    boxShadow: {
      'custom-strong': '0px 2px rgba(0, 0, 0, 0.5)', // Custom shadow class
    },
  },
  plugins: [],
}

