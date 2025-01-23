/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-500': 'rgb(59, 130, 246)',
        'green-500': 'rgb(34, 197, 94)',
        'yellow-500': 'rgb(234, 179, 8)',
        'purple-500': 'rgb(168, 85, 247)',
        'pink-500': 'rgb(236, 72, 153)',
        'gray-500': 'rgb(107, 114, 128)',
      },
    },
  },
  plugins: [],
};