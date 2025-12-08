/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2c3e50',
        'secondary': '#3498db',
        'accent': '#e74c3c',
        'health-color': '#3498db',
        'finance-color': '#27ae60',
        'productivity-color': '#9b59b6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}