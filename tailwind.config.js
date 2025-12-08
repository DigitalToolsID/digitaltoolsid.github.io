/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [
    // Backgrounds
    'bg-primary',
    'bg-secondary',
    'bg-accent',
    'bg-health-color',
    'bg-finance-color',
    'bg-productivity-color',
    // Texts
    'text-primary',
    'text-secondary',
    'text-health-color',
    'text-finance-color',
    'text-productivity-color',
    // Borders (INI YANG TADI KURANG)
    'border-primary',
    'border-secondary',
    'border-health-color',
    'border-finance-color',
    'border-productivity-color'
  ],
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