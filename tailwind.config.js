/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [
    // --- 1. Backgrounds Custom (Eksisting) ---
    'bg-primary', 'bg-secondary', 'bg-accent',
    'bg-health-color', 'bg-finance-color', 'bg-productivity-color',
    
    // --- 2. Backgrounds Standar (WAJIB ADA untuk Components.js) ---
    'bg-blue-900', 'bg-blue-800',
    'bg-green-600', 'bg-green-700',
    'bg-purple-600', 'bg-purple-700',
    
    // [BARU] Background untuk Toggle High Contrast
    'bg-gray-200', 

    // --- 3. Texts ---
    'text-primary', 'text-secondary',
    'text-health-color', 'text-finance-color', 'text-productivity-color',
    'text-white', 
    
    // [BARU] Text untuk Toggle Non-Aktif
    'text-gray-500', 
    
    // --- 4. Borders ---
    'border-primary', 'border-secondary',
    'border-health-color', 'border-finance-color', 'border-productivity-color',

    // --- 5. Animasi Toggle ---
    'translate-x-full', 'duration-300'
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