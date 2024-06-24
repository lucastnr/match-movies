const { join } = require('path');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [join(__dirname, './web/**/*.{tsx,ts}')],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#367884',
          50: '#f1f9fa',
          100: '#dcf0f1',
          200: '#bde2e4',
          300: '#8ecdd2',
          400: '#59aeb7',
          500: '#3e939c',
          600: '#367884',
          700: '#31626d',
          800: '#2f525b',
          900: '#2b464e',
          950: '#1d363e',
        },
        secondary: {
          DEFAULT: '#b5bd81',
          50: '#f6f7ee',
          100: '#ebedda',
          200: '#d8dcba',
          300: '#b5bd81',
          400: '#a4ae6d',
          500: '#88934f',
          600: '#6a743c',
          700: '#525a31',
          800: '#43492b',
          900: '#393f28',
          950: '#1d2112',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
