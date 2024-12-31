import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          '50': '#effef5',
          '100': '#d9ffe7',
          '200': '#b5fdd1',
          '300': '#7cf9ae',
          '400': '#3cec82',
          '500': '#13d461',
          '600': '#09b850',
          '700': '#0b8a3f',
          '800': '#0f6c35',
          '900': '#0e592f',
          '950': '#013217',
        },
        woodsmoke: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#171717',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
