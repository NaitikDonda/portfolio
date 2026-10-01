/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: '#0F5C5B',
          dark: '#083B3A',
          hover: '#13706F',
          light: '#1B8280',
          soft: '#25A09E',
          accent: '#0F5C5B',
        },
        cream: {
          DEFAULT: '#F7F1E3',
          soft: '#FFFDF7',
          pure: '#FFFFFF',
          card: '#FAF6EE',
          darker: '#ECE4D0',
        },
        beige: {
          muted: '#DCCFB8',
          border: '#E3D7C1',
        },
        dark: {
          text: '#102A2A',
          muted: '#2C4949',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
