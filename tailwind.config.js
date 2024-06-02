/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color00: '#2D2D2F',
        color0: '#202023',
        color1: '#0B0C10',
        color6: '#212A31',
        color2: '#2E3944',
        color3: '#124E66',
        color4: '#748D92',
        color5: '#D3D9D4',
        color7: '#555558',
        orange: '#E43d12',
      }
    },
  },
  plugins: [],
}

