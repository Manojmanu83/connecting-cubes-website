/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#061729',
          DEFAULT: '#0B2A4A',
          800: '#0B2A4A',
          700: '#0E365E',
          600: '#144675',
        },
        primary: {
          DEFAULT: '#1261A0',
          hover: '#0E4E82',
          light: '#EAF4FC',
        },
        accent: {
          DEFAULT: '#1E88E5',
          hover: '#1976D2',
          light: '#64B5F6',
        },
        brand: {
          dark: '#0B2A4A',
          blue: '#1261A0',
          accent: '#1E88E5',
          lightBlue: '#EAF4FC',
          lightBg: '#F7FAFC',
          text: '#17202A',
          muted: '#526478',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 42, 74, 0.05), 0 1px 2px 0 rgba(11, 42, 74, 0.03)',
        'card': '0 4px 20px -2px rgba(11, 42, 74, 0.06), 0 2px 6px -1px rgba(11, 42, 74, 0.03)',
        'card-hover': '0 12px 32px -4px rgba(11, 42, 74, 0.12), 0 4px 12px -2px rgba(11, 42, 74, 0.06)',
        'floating': '0 20px 40px -10px rgba(11, 42, 74, 0.18)',
      },
    },
  },
  plugins: [],
}
