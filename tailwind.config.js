/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [
    // --- 1. Backgrounds Global (Header & Tools) ---
    'bg-primary', 'bg-secondary', 'bg-accent',
    'bg-health-color', 'bg-finance-color', 'bg-productivity-color',
    
    // Header & Slider Global
    'bg-blue-900', 'bg-blue-800', 'bg-blue-600',
    'bg-green-600', 'bg-green-700',
    'bg-purple-600', 'bg-purple-700',
    
    // Toggle & Container
    'bg-gray-200', 'bg-white',

    // [BARU] Background Aksen Khusus (Rose/Pink untuk Menstruasi)
    'bg-rose-600', 'hover:bg-rose-700', 
    'bg-rose-50', 'bg-pink-50', 'bg-purple-50',

    // --- 2. Texts Global & Aksen ---
    'text-primary', 'text-secondary', 'text-white',
    'text-blue-600', 'text-green-600', 'text-purple-600',
    'text-gray-500',
    
    // [BARU] Teks Aksen (Rose/Pink)
    'text-rose-700', 'text-rose-600', 'text-rose-800',
    'text-pink-800', 'text-pink-600',
    'text-purple-900', 'text-purple-700',

    // --- 3. Borders, Rings & Group Hover ---
    'border-primary', 'border-secondary',
    'border-health-color', 'border-finance-color', 'border-productivity-color',
    'border-blue-400', 'border-green-400', 'border-purple-400',
    
    // [BARU] Border/Ring Aksen Rose
    'border-rose-200', 'border-rose-100',
    'focus:ring-rose-500', 'focus:border-rose-500', 'focus:ring-rose-300',
    
    'group-hover:text-blue-700', 'group-hover:bg-blue-500',

    // --- 4. Animasi Toggle ---
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
        'productivity-color': '#3730a3', // <-- DIGANTI DARI #9b59b6 (Ungu) menjadi Indigo 800
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}