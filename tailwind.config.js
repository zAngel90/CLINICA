/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Un sistema de color más sofisticado
        medical: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B8DBFF',
          300: '#85C2FF',
          400: '#4D9FFF',
          500: '#2E85FF', // Azul brillante para acciones
          600: '#005FCC',
          700: '#004799',
          800: '#003366', // Azul corporativo serio
          900: '#002244', // Navy profundo (Casi negro)
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6', // Acento estético/fresco
          600: '#0D9488',
        },
        surface: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Playfair Display', 'serif'], // Opcional si quisieras añadir una fuente serif para títulos
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 40px -3px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(46, 133, 255, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
