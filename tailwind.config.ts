import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'gradient-from': 'hsl(6, 100%, 80%)',
          'gradient-to': 'hsl(335, 100%, 65%)',
        },
        neutral: {
          'pale-blue': 'hsl(243, 100%, 93%)',
          'grayish-blue': 'hsl(229, 7%, 55%)',
          'dark-blue': 'hsl(228, 56%, 26%)',
          'very-dark-blue': 'hsl(229, 57%, 11%)',
        },
      },
    },
  },
  plugins: [],
}
export default config
